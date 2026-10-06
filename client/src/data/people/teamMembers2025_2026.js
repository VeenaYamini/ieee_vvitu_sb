// 2025–2026 senior team roster transcribed from the supplied CSV.
// Photos use the matching files in public/assets/team/Team 2025-2026.
const photo = filename => filename
  ? `/assets/team/Team%202025-2026/${encodeURIComponent(filename)}`
  : '';

const person = (name, position, filename = '') => ({
  name,
  position,
  department: 'CIC',
  photo: photo(filename),
  photoPosition: '20%',
  linkedin: '',
  github: '',
});

export const executiveCommittee2025_2026 = [
  person('Jakka Lakshmi Koumudi', 'Chair Person', 'Jakka lakshmi Koumudi.jpg'),
  person('Uggam Ramakrishna', 'Vice Chair Person', 'Ramakrishna Uggam.jpg'),
  person('Shaik Rishi Yasmin', 'Secretary', 'Rishi Yasmin.jpg'),
  person('Immadisetty Hema Sri Chaitanya', 'Treasurer', 'Hema SriChaitanya.jpg'),
];

export const webmasterTeam2025_2026 = [
  person('Chunduru Giri Venkatewara Rao', 'Lead', 'CHUNDURU GIRI VENKATESWARA RAO.png'),
  person('Shaik Mastan Vali', 'Co-Lead', 'Mastan Vali Shaik.jpg'),
  person('Thoka Naga Lakshmi', 'Member', 'Nagalakshmi Thoka.jpg'),
];

export const prCommittee2025_2026 = [
  person('Sereena Josephine Kudari', 'Lead', 'SEREENA KUDARI.jpg'),
  person('Prem Naren', 'Co-Lead', 'Prem Naren.jpeg'),
  person('Velivela Hemanya', 'Member', 'Hemanya Velivela.jpg'),
  person('Gade Yuva Rani', 'Member', 'Yuva Rani Gade.jpg'),
];

export const emCommittee2025_2026 = [
  person('Hemansha Ganjinaboyina', 'Lead', 'Hemansha ganjinaboyina.jpeg'),
  person('Nerella Chanikya', 'Co-Lead', 'Chanikya Nerella.jpg'),
  person('Shaik Tahaseen', 'Member', 'Shaik Tahaseen.JPG'),
];

export const smdCommittee2025_2026 = [
  // The CSV lists this member, but no matching photo is present in the supplied folder.
  person('Sanam Sai Venkat', 'Lead'),
  person('Mohana Chandrika Kamireddy', 'Co-Lead', 'Mohanachandrika Kamireddy.jpeg'),
  person('Penumalli Gowri Pravallika', 'Member', 'Penumalli Gowri Pravallika.jpg'),
];

export const edCommittee2025_2026 = [
  person('Kotturu Vishnu Sree Vidya', 'Lead', 'Vidya Kotturu.jpg'),
  person('Rebbavarapu Samiyel Moresh', 'Co-Lead', 'Moresh bro.jpg'),
  person('T Himesh Purna Ram Sai', 'Member', 'Himesh Ram.png'),
  person('Timmarajupalem Sai Sri Harshitha', 'Member', 'SaiSriHarshitha Timmarajupalem.JPG'),
];
