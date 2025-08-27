export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  featured?: boolean;
}

export interface TestimonialData {
  id: string;
  author: string;
  service: string;
  text: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  gdpr: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface CounterData {
  value: number;
  label: string;
  suffix?: string;
}

export interface PartnerData {
  id: string;
  name: string;
  logo: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}