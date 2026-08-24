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

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
  organisation?: string;
}

export interface MediaLogo {
  id: string;
  name: string;
  svgPath: string;
  width: number;
  height: number;
}
