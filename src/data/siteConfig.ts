export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'tiktok';
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  heroGreeting: string;
  heroHeadline: string[];
  heroSubhead: string;
  tagline: string;
  email: string;
  phone: string;
  substackUrl: string;
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
  heroGreeting: 'Hello Australia!',
  heroHeadline: ['Comedy.', 'Motherhood.', 'Poor decisions.'],
  heroSubhead: 'Stand-up comedian, writer and indoors enthusiast. See Janelle live around Australia.',
  tagline: 'Quick wit. Calm hands. Zero beige.',
  email: 'hello@janellekoenig.com',
  phone: '0400 123 456',
  substackUrl: 'https://janellekoenig.substack.com',
  navItems: [
    { label: 'SHOWS', href: '#shows' },
    { label: 'WATCH', href: '#watch' },
    { label: 'ABOUT', href: '#about' },
    { label: 'MC & EVENTS', href: '#mc-events' },
  ],
  socialLinks: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/janellekoenig' },
    { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com/janellekoenig' },
    { platform: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@janellekoenig' },
  ],
  studioCredit: {
    text: 'Website by David McClung',
    url: 'https://www.mcclung.com.au',
  },
};
