import { facultyCoordinators, executiveCommittee, webmasterTeam, prCommittee, emCommittee, smdCommittee, edCommittee } from './teamMembers.js';

export const committees = [
  { name: 'Faculty Coordinators', members: facultyCoordinators },
  { name: 'Student Branch Executive Committee', members: executiveCommittee },
  { name: 'Webmaster Team', members: webmasterTeam },
  { name: 'Public Relations & Promotions (PR)', members: prCommittee },
  { name: 'Event Management (EM)', members: emCommittee },
  { name: 'Design and Social Media (SMD)', members: smdCommittee },
  { name: 'Editorial and Drafting (ED)', members: edCommittee },
];
