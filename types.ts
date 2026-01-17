export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
  fullDescription?: string[];
  image: string;
  features: string[];
  treatmentTypes?: {
    title: string;
    description: string;
  }[];
  benefitsDetail?: {
    title: string;
    description: string;
  }[];
  doctorNote?: string;
}

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  procedure: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SiteConfig {
  brandName: string;
  expertName: string;
  tagline: string;
  description: string;
  contactDetails: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    googleMapsLink: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    pinterest: string;
    youtube: string;
  };
  bookingUrl: string;
  seo: {
    title: string;
    description: string;
    url: string;
  };
}
