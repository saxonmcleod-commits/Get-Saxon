import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export interface NavLink {
  name: string;
  href: string;
}