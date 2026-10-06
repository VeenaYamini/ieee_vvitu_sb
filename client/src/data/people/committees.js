import { facultyCoordinators, executiveCommittee, webmasterTeam, prCommittee, emCommittee, smdCommittee, edCommittee } from './teamMembers.js';
import {
  executiveCommittee2025_2026,
  webmasterTeam2025_2026,
  prCommittee2025_2026,
  emCommittee2025_2026,
  smdCommittee2025_2026,
  edCommittee2025_2026,
} from './teamMembers2025_2026.js';

export const committees2026_2027 = [
  { name: 'Faculty Coordinators', members: facultyCoordinators },
  { name: 'Student Branch Executive Committee', members: executiveCommittee },
  { name: 'Webmaster Team', members: webmasterTeam },
  { name: 'Public Relations & Promotions (PR)', members: prCommittee },
  { name: 'Event Management (EM)', members: emCommittee },
  { name: 'Design and Social Media (SMD)', members: smdCommittee },
  { name: 'Editorial and Drafting (ED)', members: edCommittee },
];

export const committees2025_2026 = [
  { name: 'Faculty Coordinators', members: facultyCoordinators },
  { name: 'Student Branch Executive Committee', members: executiveCommittee2025_2026 },
  { name: 'Webmaster Team', members: webmasterTeam2025_2026 },
  { name: 'Public Relations & Promotions (PR)', members: prCommittee2025_2026 },
  { name: 'Event Management (EM)', members: emCommittee2025_2026 },
  { name: 'Design and Social Media (SMD)', members: smdCommittee2025_2026 },
  { name: 'Editorial and Drafting (ED)', members: edCommittee2025_2026 },
];

export const committeesByYear = {
  '2026-2027': committees2026_2027,
  '2025-2026': committees2025_2026,
};

export const committees = committees2026_2027;
