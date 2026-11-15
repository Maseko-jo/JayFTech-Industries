// A Stamp profile is a "first job passport". Each stamp is one piece of real
// work, confirmed by a named person who saw it done.
export type StampKind = 'Client job' | 'Practical challenge' | 'Shadowed job' | 'Course';

export interface Stamp {
  id: string; // short code a reader can quote when checking it, e.g. ST-0007
  title: string;
  kind: StampKind;
  date: string; // YYYY-MM
  where: string; // the kind of client, not the client's name, unless they agree
  whatWasDone: string[];
  skills: string[];
  verifiedBy: string;
  verifierRole: string;
  feedback?: string;
}

export interface StampProfile {
  slug: string;
  name: string;
  initials: string;
  headline: string;
  area: string;
  studied: string;
  about: string;
  isExample: boolean;
  stamps: Stamp[];
}
