import type { EventItem } from '../types';

/**
 * Normalizes Google Sheet URLs. If a standard Google Sheets document link
 * (e.g. /edit or /view) is provided, converts it to Google's real-time gviz CSV export endpoint.
 */
export function getSheetCSVUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();
  // Standard Google Sheets doc URL: https://docs.google.com/spreadsheets/d/<ID>/...
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && !trimmed.includes('/pub') && !trimmed.includes('output=csv') && !trimmed.includes('tqx=out:csv')) {
    const sheetId = match[1];
    // Check if gid is present
    const gidMatch = trimmed.match(/[#&?]gid=([0-9]+)/);
    const gid = gidMatch ? gidMatch[1] : '0';
    return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${gid}`;
  }
  return trimmed;
}

/**
 * Parses raw CSV text safely adhering to basic RFC 4180 rules (quoted strings, escaped quotes).
 */
export function parseCSV(csvText: string): Record<string, string>[] {
  const lines: string[] = [];
  let currentLine = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentLine += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      if (currentLine.trim().length > 0) {
        lines.push(currentLine);
      }
      currentLine = '';
    } else {
      currentLine += char;
    }
  }

  if (currentLine.trim().length > 0) {
    lines.push(currentLine);
  }

  if (lines.length < 2) return [];

  const parseRow = (line: string): string[] => {
    const cells: string[] = [];
    let cell = '';
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      const nc = line[i + 1];
      if (c === '"') {
        if (inQ && nc === '"') {
          cell += '"';
          i++;
        } else {
          inQ = !inQ;
        }
      } else if (c === ',' && !inQ) {
        cells.push(cell.trim());
        cell = '';
      } else {
        cell += c;
      }
    }
    cells.push(cell.trim());
    return cells;
  };

  const rawHeaders = parseRow(lines[0]);
  const headers = rawHeaders.map((h) => h.trim().toLowerCase().replace(/[\s_-]+/g, ''));

  const rows: Record<string, string>[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseRow(lines[i]);
    // Skip empty lines
    if (values.every((v) => !v)) continue;

    const rowObj: Record<string, string> = {};
    headers.forEach((header, index) => {
      rowObj[header] = values[index] ?? '';
    });
    rows.push(rowObj);
  }

  return rows;
}

const MONTH_NAMES = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

/**
 * Parses date string (e.g. YYYY-MM-DD or MM/DD/YYYY) into local Date object.
 */
export function parseEventDate(dateStr: string): Date | null {
  if (!dateStr || !dateStr.trim()) return null;
  const cleaned = dateStr.trim();

  // Check YYYY-MM-DD format
  const isoMatch = cleaned.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (isoMatch) {
    const year = parseInt(isoMatch[1], 10);
    const month = parseInt(isoMatch[2], 10) - 1;
    const day = parseInt(isoMatch[3], 10);
    return new Date(year, month, day, 23, 59, 59, 999);
  }

  // Check DD-MM-YYYY format
  const dmyMatch = cleaned.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (dmyMatch) {
    const day = parseInt(dmyMatch[1], 10);
    const month = parseInt(dmyMatch[2], 10) - 1;
    const year = parseInt(dmyMatch[3], 10);
    return new Date(year, month, day, 23, 59, 59, 999);
  }

  const parsed = new Date(cleaned);
  if (!isNaN(parsed.getTime())) {
    // Set to end of the day in local time so event doesn't disappear prematurely on the day of the show
    parsed.setHours(23, 59, 59, 999);
    return parsed;
  }

  return null;
}

/**
 * Transforms parsed CSV rows into typed, sorted EventItem objects, excluding past events.
 */
export function processEventsFromCSV(csvText: string, referenceDate: Date = new Date()): EventItem[] {
  const rows = parseCSV(csvText);
  const events: (EventItem & { _timestamp: number })[] = [];

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];

    // Find date field flexibly
    const rawDate =
      row['date'] ||
      row['eventdate'] ||
      row['showdate'] ||
      '';

    const eventDate = parseEventDate(rawDate);
    if (!eventDate) continue;

    // Filter out past events (eventDate was set to 23:59:59 on the event day)
    if (eventDate.getTime() < referenceDate.getTime()) {
      continue;
    }

    const title =
      row['title'] ||
      row['eventname'] ||
      row['event'] ||
      row['name'] ||
      'Live Show';

    const venue = row['venue'] || '';
    const location = row['location'] || row['city'] || '';
    const ticketUrl =
      row['ticketurl'] ||
      row['tickets'] ||
      row['ticketlink'] ||
      row['link'] ||
      '#';

    const soldOutRaw = (
      row['soldout'] ||
      row['issoldout'] ||
      row['status'] ||
      ''
    ).toLowerCase();

    const isSoldOut =
      soldOutRaw === 'true' ||
      soldOutRaw === 'yes' ||
      soldOutRaw === 'sold out' ||
      soldOutRaw === 'soldout';

    const day = String(eventDate.getDate()).padStart(2, '0');
    const month = MONTH_NAMES[eventDate.getMonth()] || 'TBA';
    const year = String(eventDate.getFullYear());

    events.push({
      id: `sheet-event-${index}-${day}-${month}-${year}`,
      day,
      month,
      year,
      title,
      venue,
      location,
      ticketUrl,
      isSoldOut,
      status: isSoldOut ? 'soldout' : 'onsale',
      _timestamp: eventDate.getTime(),
    });
  }

  // Sort upcoming events chronologically ascending
  events.sort((a, b) => a._timestamp - b._timestamp);

  // Return clean EventItem array without internal _timestamp
  return events.map(({ _timestamp, ...event }) => event);
}

/**
 * Extracts Google Sheet ID from document URL if present.
 */
export function extractSheetId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && !trimmed.includes('/pub')) {
    return match[1];
  }
  return null;
}

/**
 * Transforms Google Visualization JSON table into typed, sorted EventItem objects, excluding past events.
 */
export function processEventsFromGviz(gvizData: any, referenceDate: Date = new Date()): EventItem[] {
  if (!gvizData || !gvizData.table || !Array.isArray(gvizData.table.rows)) {
    return [];
  }

  const cols: string[] = gvizData.table.cols.map((col: any) =>
    (col.label || col.id || '').trim().toLowerCase().replace(/[\s_-]+/g, '')
  );

  const events: (EventItem & { _timestamp: number })[] = [];
  const rows = gvizData.table.rows;

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (!row || !Array.isArray(row.c)) continue;

    const rowObj: Record<string, string> = {};
    cols.forEach((colName, colIdx) => {
      const cell = row.c[colIdx];
      if (cell) {
        rowObj[colName] = (
          cell.f !== undefined && cell.f !== null
            ? String(cell.f)
            : cell.v !== undefined && cell.v !== null
            ? String(cell.v)
            : ''
        ).trim();
      } else {
        rowObj[colName] = '';
      }
    });

    const rawDate = rowObj['date'] || rowObj['eventdate'] || rowObj['showdate'] || '';
    const eventDate = parseEventDate(rawDate);
    if (!eventDate) continue;

    // Filter out past events
    if (eventDate.getTime() < referenceDate.getTime()) {
      continue;
    }

    const title =
      rowObj['title'] ||
      rowObj['eventname'] ||
      rowObj['event'] ||
      rowObj['name'] ||
      'Live Show';

    const venue = rowObj['venue'] || '';
    const location = rowObj['location'] || rowObj['city'] || '';
    const ticketUrl =
      rowObj['ticketurl'] ||
      rowObj['tickets'] ||
      rowObj['ticketlink'] ||
      rowObj['link'] ||
      '#';

    const soldOutRaw = (
      rowObj['soldout'] ||
      rowObj['issoldout'] ||
      rowObj['status'] ||
      ''
    ).toLowerCase();

    const isSoldOut =
      soldOutRaw === 'true' ||
      soldOutRaw === 'yes' ||
      soldOutRaw === 'sold out' ||
      soldOutRaw === 'soldout';

    const day = String(eventDate.getDate()).padStart(2, '0');
    const month = MONTH_NAMES[eventDate.getMonth()] || 'TBA';
    const year = String(eventDate.getFullYear());

    events.push({
      id: `sheet-event-${index}-${day}-${month}-${year}`,
      day,
      month,
      year,
      title,
      venue,
      location,
      ticketUrl,
      isSoldOut,
      status: isSoldOut ? 'soldout' : 'onsale',
      _timestamp: eventDate.getTime(),
    });
  }

  events.sort((a, b) => a._timestamp - b._timestamp);
  return events.map(({ _timestamp, ...event }) => event);
}

