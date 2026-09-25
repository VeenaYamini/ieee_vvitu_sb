// Gallery albums use the existing folder and filename casing under public/assets/Gallery.
// Add one album here when a new event photo folder is ready; photo counts can vary freely.
const galleryPhoto = (event, filename, number) => ({
  src: `/assets/Gallery/${encodeURIComponent(event.eventFolder)}/${encodeURIComponent(filename)}`,
  alt: `IEEE SB VVITU participants during ${event.event}, event photograph ${number}`,
});

function album({ year, event, eventFolder, eventSlug, date = '', altEvent = event, files }) {
  const photoEvent = { event, eventFolder };
  return {
    year,
    event,
    eventFolder,
    eventSlug,
    date,
    photos: files.map((filename, index) => galleryPhoto({ ...photoEvent, event: altEvent }, filename, index + 1)),
  };
}

export const galleryAlbums = [
  album({
    year: 2026,
    event: 'Orientation Day 2026 @VVITU',
    eventFolder: 'Orientation Day 2026',
    eventSlug: 'orientation-day-2026',
    date: '17 September 2026',
    files: ['orientation-2026-1.jpg', 'orientation-2026-2.jpg', 'orientation-2026-3.jpg', 'orientation-2026-4.jpg'],
  }),
  album({
    year: 2026,
    event: 'Build-X',
    eventFolder: 'Build-X',
    eventSlug: 'build-x-2026',
    date: '15 September 2026',
    altEvent: 'BUILD-X The Rapid Engineering Challenge',
    files: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  }),
  album({
    year: 2026,
    event: 'Digital Literacy',
    eventFolder: 'Digital Literacy',
    eventSlug: 'digital-literacy-2026',
    date: '02 April 2026',
    files: ['2.JPG', '3.JPG', '5.jpg', '6.JPG'],
  }),
  album({
    year: 2026,
    event: 'NEXORA',
    eventFolder: 'Nexora',
    eventSlug: 'nexora-2026',
    date: '16 March 2026',
    altEvent: 'NEXORA The Full Stack Expo',
    files: ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.jpg', '8.jpg'],
  }),
  album({
    year: 2025,
    event: 'VIVINYA 2K25',
    eventFolder: 'Vivinya 2k25',
    eventSlug: 'vivinya-2k25',
    date: '16–17 October 2025',
    altEvent: 'VIVINYA 2K25 National Tech Fest',
    files: ['1.avif', '2.avif', '3.avif', '4.avif'],
  }),
  album({
    year: 2025,
    event: 'IEEE Day 2025',
    eventFolder: 'IEEE Day 2025',
    eventSlug: 'ieee-day-2025',
    date: '07 October 2025',
    files: ['1.avif', '2.avif'],
  }),
];
