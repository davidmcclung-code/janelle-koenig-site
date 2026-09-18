export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'x';
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  heroHeadline: string[];
  heroSubhead: string;
  tagline: string;
  email: string;
  phone: string;
  substackUrl: string;
  eventsSheetUrl?: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  studioCredit: {
    text: string;
    url?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Janelle Koenig',
  role: 'Comedian | MC | Panel Host',
  heroHeadline: ['Comedy.', 'Casseroles.', 'Chaos.'],
  heroSubhead: 'Comedian, creator, writer, MC, mum, and indoorsy type. See Janelle live around Australia.',
  tagline: 'Quick wit. Calm hands. Zero beige.',
  email: 'hello@janellekoenig.com',
  phone: '0400 123 456',
  substackUrl: 'https://janellekoenig.substack.com/',
  eventsSheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7-WEu9FEEkyIqi3TxtQ4DzrqlWn4dKMcmvki-X2xkPaHQwvdshaupWr-DWcPhiOoQjtO_yRkvzXHy/pub?gid=0&single=true&output=csv',
  navItems: [
    { label: 'SHOWS', href: '/#shows' },
    { label: 'WATCH', href: '/#watch' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'MC & EVENTS', href: '/#mc-events' },
    { label: 'GALLERY', href: '/photos' },
  ],
  socialLinks: [
    { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/janellekoenig/' },
    { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/janellekoenigcomedy/' },
    { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@janellekoenig_comedy' },
    { platform: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@janellekoenig' },
    { platform: 'x', label: 'X', url: 'https://x.com/JanelleKoenig' },
  ],
  studioCredit: {
    text: 'Website by',
    url: 'https://www.mcclung.com.au',
  },
};
