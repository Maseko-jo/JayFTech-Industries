import { StampProfile } from '../types';

// Every Stamp profile on the site. To add a real person:
//   1. Copy the example below and give it a new slug (used in the link: /<slug>).
//   2. Set isExample to false.
//   3. Only add a stamp once you (or the named verifier) actually saw the work done.
//   4. Get the person's OK before publishing, and the client's OK before naming them.
export const STAMP_PROFILES: StampProfile[] = [
  {
    slug: 'example',
    name: 'Lerato M.',
    initials: 'LM',
    headline: 'Junior IT support technician',
    area: 'Soweto, Johannesburg',
    studied: 'N6 IT diploma, TVET college',
    about:
      'I finished my diploma in 2025 and kept hearing "you need experience". These stamps are the jobs I have done since, each one checked by the person I did it for or with.',
    isExample: true,
    stamps: [
      {
        id: 'ST-0001',
        title: 'Shadowed: office laptop and email set-up',
        kind: 'Shadowed job',
        date: '2026-09',
        where: 'Accounting practice, 5 staff',
        whatWasDone: [
          'Set up 3 new laptops alongside Jordan',
          'Moved staff onto business email on their own domain',
          'Turned on two-step login for every account',
        ],
        skills: ['Windows set-up', 'Microsoft 365', 'Account security'],
        verifiedBy: 'Jordan Maseko',
        verifierRole: 'Founder, JayFTech (supervised the job)',
        feedback: 'Careful and patient with staff. Ready to do this kind of job alone.',
      },
      {
        id: 'ST-0002',
        title: 'Practical challenge: find and fix a broken Wi-Fi set-up',
        kind: 'Practical challenge',
        date: '2026-09',
        where: 'JayFTech test bench',
        whatWasDone: [
          'Found the wrong router setting that was dropping connections',
          'Separated guest Wi-Fi from the office network',
          'Wrote a one-page note the owner could follow',
        ],
        skills: ['Networking basics', 'Troubleshooting', 'Plain-language write-ups'],
        verifiedBy: 'Jordan Maseko',
        verifierRole: 'Founder, JayFTech (set and marked the task)',
      },
      {
        id: 'ST-0003',
        title: 'Client job: shop backup and Wi-Fi tidy-up',
        kind: 'Client job',
        date: '2026-10',
        where: 'Hardware store, 8 staff',
        whatWasDone: [
          'Set up automatic cloud backup for the till PC and office files',
          'Tested a restore with the owner watching',
          'Changed default router passwords',
        ],
        skills: ['Backups', 'Networking basics', 'Client communication'],
        verifiedBy: 'Store owner',
        verifierRole: 'Client (confirmed on WhatsApp)',
        feedback: 'Explained everything so I understood it. Would have her back.',
      },
    ],
  },
];

export const findStampProfile = (slug: string) => STAMP_PROFILES.find(p => p.slug === slug);
