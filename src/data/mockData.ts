import {
  ServiceItem,
  NetworkProfile,
  SAStatistic,
  MilestoneItem,
  FounderSkill,
  WellnessQuestion,
} from '../types';

// Approximate figures. Re-check the latest releases before the site goes public.
export const SA_STATISTICS: SAStatistic[] = [
  {
    stat: '~45%',
    label: 'Youth unemployment (15–34)',
    subtext: 'Millions of young South Africans, many with IT diplomas and degrees, can’t get a first foot in the door.',
    source: 'Stats SA, Quarterly Labour Force Survey',
  },
  {
    stat: '~2.5m',
    label: 'Small businesses (SMMEs)',
    subtext: 'They carry a large share of jobs in the country, yet most run without anyone looking after their tech.',
    source: 'SEDA SMME Quarterly Update',
  },
  {
    stat: '0',
    label: 'IT staff in a typical micro business',
    subtext: 'The owner is the IT department. Tech problems get patched in a panic, then forgotten until the next one.',
    source: 'Common SME reality',
  },
  {
    stat: 'R20k+',
    label: 'Monthly cost of a full-time IT hire',
    subtext: 'Too much for a startup that only needs a few hours of help a month.',
    source: 'Indicative SA salary ranges',
  },
];

// What Jordan can deliver personally today. Edit this list to match reality.
export const FOUNDER_SKILLS: FounderSkill[] = [
  {
    title: 'Websites that look the part',
    detail: 'Modern, fast sites for small businesses, churches and creatives. Built, launched and handed over properly.',
  },
  {
    title: 'Business email & domains',
    detail: 'You@yourbusiness.co.za on Google Workspace or Microsoft 365, set up so mail actually lands in inboxes.',
  },
  {
    title: 'Automation & small tools',
    detail: 'Cutting repetitive admin: forms that notify you, spreadsheets that fill themselves, simple internal apps.',
  },
  {
    title: 'Testing & quality checks',
    detail: 'Day job experience testing real call-centre systems. I check things work before your customers find out they don’t.',
  },
  {
    title: 'Everyday tech setup',
    detail: 'Laptops, Wi-Fi, printers, shared drives and backups set up once, properly, and written down.',
  },
];

// The Tech Wellness Check. Four pillars, two questions each.
export const WELLNESS_QUESTIONS: WellnessQuestion[] = [
  {
    id: 'w1',
    pillar: 'Foundation',
    question: 'If a laptop died today, would you lose important files?',
    whyItMatters: 'One stolen or broken laptop can wipe out months of work, invoices and client records.',
  },
  {
    id: 'w2',
    pillar: 'Foundation',
    question: 'Is your Wi-Fi unreliable in some parts of your workspace?',
    whyItMatters: 'Slow or dropping internet quietly costs hours every week and frustrates staff and customers.',
  },
  {
    id: 'w3',
    pillar: 'Protection',
    question: 'Do people share passwords, or reuse the same one everywhere?',
    whyItMatters: 'Shared and reused passwords are the most common way small businesses get hacked.',
  },
  {
    id: 'w4',
    pillar: 'Protection',
    question: 'Is two-step login (an SMS or app code) switched OFF on your email?',
    whyItMatters: 'Your email is the key to every other account. Two-step login blocks most takeovers.',
  },
  {
    id: 'w5',
    pillar: 'Presence',
    question: 'Do you still use a Gmail or Outlook address for business?',
    whyItMatters: 'A proper @yourbusiness address builds trust and keeps the account owned by the business, not a person.',
  },
  {
    id: 'w6',
    pillar: 'Presence',
    question: 'Is your website missing, outdated, or hard to use on a phone?',
    whyItMatters: 'Most customers check you out on their phone first. A weak site loses them before they call.',
  },
  {
    id: 'w7',
    pillar: 'Rhythm',
    question: 'Do you only think about tech when something breaks?',
    whyItMatters: 'Small issues compound. A short regular check-up is far cheaper than an emergency.',
  },
  {
    id: 'w8',
    pillar: 'Rhythm',
    question: 'Would anyone else know your logins and setup if you were unavailable?',
    whyItMatters: 'If only one person knows how things work, the business is one bad week away from being stuck.',
  },
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Tech Wellness Check-Up',
    category: 'Cybersecurity',
    shortDesc: 'A one-off review of your setup with a plain-English report: what’s fine, what’s risky, what to fix first.',
    deliverables: [
      'Walk-through of devices, accounts, Wi-Fi and backups',
      'Password and two-step login review',
      'Prioritised fix list in plain English',
      'A chat about what to tackle next',
    ],
    basePriceZar: 650,
    estimatedHours: 2,
    isOnSite: true,
    popular: true,
  },
  {
    id: 'srv-2',
    title: 'Business Email & Domain Setup',
    category: 'Cloud & Software',
    shortDesc: 'Professional email (you@yourbusiness.co.za) with shared calendars and cloud storage.',
    deliverables: [
      'Domain connected and verified',
      'Spam-protection records (SPF, DKIM, DMARC)',
      'Up to 5 mailboxes created and moved over',
      'Phones and laptops connected',
    ],
    basePriceZar: 950,
    estimatedHours: 3,
    isOnSite: false,
    popular: true,
  },
  {
    id: 'srv-3',
    title: 'Small Business Website',
    category: 'Web & Custom',
    shortDesc: 'A clean, mobile-first site with your services, contact details and WhatsApp button.',
    deliverables: [
      'Up to 5 pages, designed for phones first',
      'Contact form and WhatsApp link',
      'Google Business profile linked',
      'Handover so you own everything',
    ],
    basePriceZar: 3500,
    estimatedHours: 12,
    isOnSite: false,
    popular: false,
  },
  {
    id: 'srv-4',
    title: 'Office Wi-Fi & Network Fix',
    category: 'Networking',
    shortDesc: 'Find the dead zones, set up staff and guest Wi-Fi, and get the router configured properly.',
    deliverables: [
      'Coverage walk-through',
      'Separate staff and guest networks',
      'Router settings secured',
      'Before and after speed test',
    ],
    basePriceZar: 1100,
    estimatedHours: 3,
    isOnSite: true,
    popular: false,
  },
  {
    id: 'srv-5',
    title: 'Laptop & Workstation Setup',
    category: 'Hardware',
    shortDesc: 'New machines unboxed, updated, secured and connected to printers, Wi-Fi and shared files.',
    deliverables: [
      'Up to 3 machines set up',
      'Updates, antivirus and backups switched on',
      'Printer and shared drive connected',
      'Simple setup sheet left behind',
    ],
    basePriceZar: 800,
    estimatedHours: 3,
    isOnSite: true,
    popular: false,
  },
  {
    id: 'srv-6',
    title: 'Admin Automation',
    category: 'Web & Custom',
    shortDesc: 'Turn a repetitive task into something that runs itself: forms, alerts, spreadsheets, bookings.',
    deliverables: [
      'One workflow mapped and automated',
      'Notifications to email or WhatsApp',
      'Short how-it-works guide',
      '14 days of fixes included',
    ],
    basePriceZar: 1500,
    estimatedHours: 5,
    isOnSite: false,
    popular: false,
  },
];

// Illustrations of who the network is for. Not real people.
export const SAMPLE_PROFILES: NetworkProfile[] = [
  {
    id: 'p-1',
    initials: 'NS',
    title: 'Network & support technician',
    background: 'IT diploma, TVET college',
    city: 'Johannesburg',
    skills: ['Wi-Fi & routers', 'Cabling', 'Windows', 'Printers'],
    targetRateZar: 250,
  },
  {
    id: 'p-2',
    initials: 'CS',
    title: 'Cloud & security junior',
    background: 'BSc Computer Science graduate',
    city: 'Cape Town',
    skills: ['Google Workspace', 'Microsoft 365', 'Two-step login', 'POPIA basics'],
    targetRateZar: 300,
  },
  {
    id: 'p-3',
    initials: 'HW',
    title: 'Hardware & POS technician',
    background: 'N-Diploma, CompTIA A+',
    city: 'Pretoria',
    skills: ['PC repair', 'POS terminals', 'Upgrades', 'Setup'],
    targetRateZar: 230,
  },
  {
    id: 'p-4',
    initials: 'WD',
    title: 'Junior web developer',
    background: 'Coding bootcamp graduate',
    city: 'Durban',
    skills: ['Websites', 'Payments', 'Automation', 'React'],
    targetRateZar: 320,
  },
];

export const ROADMAP_MILESTONES: MilestoneItem[] = [
  {
    id: 'm-0',
    title: 'Start with me',
    phase: 'Phase 0 · Founder-led',
    timing: 'Now',
    status: 'in_progress',
    description:
      'I take on the first clients myself, in Johannesburg and remotely. Every job teaches me what small businesses actually need, what they’ll pay, and how long the work really takes.',
    deliverables: [
      'First 5 paying clients',
      'Fixed prices tested against real jobs',
      'Before/after stories and testimonials',
      'Simple contract and job checklist',
    ],
  },
  {
    id: 'm-1',
    title: 'Bring in the first trusted techs',
    phase: 'Phase 1 · Small crew',
    timing: 'Once demand is steady',
    status: 'upcoming',
    description:
      'When there’s more work than I can do, I bring in 3–5 graduates I’ve personally met and tested. I stay on every job as the quality check while they build a track record.',
    deliverables: [
      'Interview and practical skills test',
      'ID and reference checks',
      'Independent contractor agreements',
      'Shadowing before solo jobs',
    ],
  },
  {
    id: 'm-2',
    title: 'Make it repeatable',
    phase: 'Phase 2 · Systems',
    timing: 'After ~50 jobs',
    status: 'upcoming',
    description:
      'Turn what works into a system: online booking, deposits through a local payment provider, job sign-off, and monthly care plans so clients get looked after, not just rescued.',
    deliverables: [
      'Online booking and deposits',
      'Monthly “tech care” plans',
      'Ratings from real completed jobs',
      'Basic insurance cover',
    ],
  },
  {
    id: 'm-3',
    title: 'Grow the pipeline',
    phase: 'Phase 3 · Network',
    timing: 'Longer term',
    status: 'upcoming',
    description:
      'Partner with TVET colleges, bootcamps and small-business hubs so graduates flow in and businesses get referred, city by city.',
    deliverables: [
      'College and bootcamp partnerships',
      'Business-hub referral deals',
      'Second metro launch',
      'Grads moving into longer contracts',
    ],
  },
];
