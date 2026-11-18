export interface EventItem {
  id: string;
  day: string;
  month: string;
  year?: string;
  title: string;
  venue: string;
  location: string;
  ticketUrl: string;
  isSoldOut?: boolean;
  status?: 'onsale' | 'soldout' | 'limited';
}
