export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "resume" | "facebook";
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  initials: string;
  role: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  schoolEmail?: string;
  socials: SocialLink[];
}

export interface HeroContent {
  name: string;
  title: string;
  description: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  highlights: string[];
}

export interface ContactContent {
  heading: string;
  description: string;
  availability: string;
  ctaLabel: string;
}
