export type ServiceCategory = 'Hardware' | 'Networking' | 'Cloud & Software' | 'Cybersecurity' | 'Web & Custom';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  deliverables: string[];
  basePriceZar: number;
  estimatedHours: number;
  isOnSite: boolean;
  popular?: boolean;
}

// A sample of the kind of person the network will be built from.
// These are illustrations, not real people, until real techs sign up.
export interface NetworkProfile {
  id: string;
  initials: string;
  title: string;
  background: string;
  city: string;
  skills: string[];
  targetRateZar: number;
}

export interface FounderSkill {
  title: string;
  detail: string;
}

export interface WellnessQuestion {
  id: string;
  pillar: 'Foundation' | 'Protection' | 'Presence' | 'Rhythm';
  question: string;
  whyItMatters: string;
}

export interface BookingRequest {
  id: string;
  serviceTitle: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  preferredDate: string;
  notes: string;
  isCustomQuote: boolean;
  estimateZar: number;
}

export interface SAStatistic {
  stat: string;
  label: string;
  subtext: string;
  source: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  phase: string;
  timing: string;
  status: 'in_progress' | 'upcoming';
  description: string;
  deliverables: string[];
}

