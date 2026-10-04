import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, Users, BookOpen, Mail, Send, ExternalLink } from 'lucide-react';
import { homeContent } from '../data/home.js';
import { aboutContent } from '../data/about.js';
import { committees } from '../data/people/committees.js';
import { events } from '../data/events.js';
import { galleryAlbums } from '../data/gallery.js';
import { resources } from '../data/resources.js';
import { contactInfo } from '../data/contact.js';
import { siteInfo } from '../data/site.js';

function Seo({ title, description }) {
  return <Helmet><title>{title} | IEEE SB VVITU</title><meta name="description" content={description}/></Helmet>;
}
function PageIntro({ eyebrow, title, children }) {
  return <div className="page-intro"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{children && <p>{children}</p>}</div>;
}
function SectionTitle({ kicker, title, link }) {
  return <div className="section-title"><div><div className="eyebrow">{kicker}</div><h2>{title}</h2></div>{link && <Link className="text-link" to={link[1]}>{link[0]} <ArrowRight size={16}/></Link>}</div>;
}
function EventCard({ event }) {
  return <Link className="event-card" to={`/events/${event.slug}`} aria-label={`View details for ${event.name}`}><div className="event-poster">{event.poster?<img src={event.poster} alt={event.posterAlt||`${event.name} poster`} loading="lazy"/>:<div className="poster-placeholder">Poster coming soon</div>}</div><div className="event-card-body"><span className="tag">{event.category}</span><h3>{event.name}</h3><div className="event-date"><CalendarDays size={15}/><time>{event.date}</time></div><p>{event.shortDescription}</p><span className="text-link event-details-link">View Details <ArrowRight size={15}/></span></div></Link>;
}

export function Home() {
    return <><Seo title="Home" description="IEEE Student Branch at Vasireddy Venkatadri International Technological University: student community, learning and technical activities."/>
    <section className="hero"><div className="container hero-grid"><div><div className="eyebrow light">{homeContent.eyebrow}</div><h1>{homeContent.headline}<br/><em>{homeContent.headlineEmphasis}</em></h1><p>{homeContent.introduction}</p><div className="hero-actions"><Link className="button button-white" to="/about">Discover our branch <ArrowRight size={17}/></Link><Link className="button button-outline" to="/events">Explore events</Link></div><div className="hero-note"><span className="status-dot"/>{homeContent.heroNote}</div></div><div className="hero-art"><img src={siteInfo.branchLogo} alt={`${siteInfo.organization} ${siteInfo.branch} logo`}/><div className="hero-art-caption">{siteInfo.organization}<br/><b>{siteInfo.university}</b></div></div></div></section>
    <section className="container section"><SectionTitle kicker="Who we are" title={homeContent.whoWeAre} link={['About the branch','/about']}/><div className="home-about"><div className="large-copy">{homeContent.branchIntroduction}</div><div className="home-about-side"><p>{homeContent.branchDescription}</p><Link className="text-link" to="/team">Meet the community <ArrowRight size={16}/></Link></div></div></section>
    <section className="stat-band"><div className="container stats">{homeContent.statistics.map(stat=><div key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>)}</div></section>
    <section className="container section"><SectionTitle kicker="Branch calendar" title={homeContent.eventsHeading} link={['All events','/events']}/>{events.length?<div className="event-grid">{events.slice(0,2).map(event=><EventCard event={event} key={event.slug}/>)}</div>:<p className="empty-state">Recent events will appear here once branch details are available.</p>}</section>
    <section className="container join-strip"><div><div className="eyebrow light">Be part of it</div><h2>{homeContent.callToAction.heading}</h2><p>{homeContent.callToAction.description}</p></div><Link className="button button-white" to="/contact">Contact the branch <ArrowRight size={17}/></Link></section>
  </>;
}

export function About() {
  return <><Seo title="About" description="Learn about IEEE, IEEE Student Branch VVITU, the institute, and the branch's vision and mission."/><div className="container page about-page">
    <PageIntro eyebrow="About the branch" title={aboutContent.introTitle}>{aboutContent.introDescription}</PageIntro>
    <section className="about-card-grid" aria-label="About IEEE, the Student Branch, and VVITU"><article className="content-card"><span className="eyebrow">01 · IEEE</span><h2>{aboutContent.ieee.title}</h2><p>{aboutContent.ieee.description}</p><a className="text-link" href={aboutContent.ieee.link} target="_blank" rel="noreferrer">About IEEE <ArrowUpRight size={15}/></a></article><article className="content-card"><span className="eyebrow">02 · Student Branch</span><h2>{aboutContent.branch.title}</h2><p>{aboutContent.branch.description}</p></article><article className="content-card"><span className="eyebrow">03 · VVITU</span><h2>{aboutContent.university.title}</h2><p><strong>{aboutContent.university.name}</strong> {aboutContent.university.description}</p><a className="text-link" href={siteInfo.universityWebsite} target="_blank" rel="noreferrer">Visit VVITU <ArrowUpRight size={15}/></a></article></section>
    <section className="vision" aria-label="Our vision and mission"><article className="vision-card"><div className="eyebrow">Our Vision</div><p>{aboutContent.vision}</p></article><article className="vision-card"><div className="eyebrow">Our Mission</div><p>{aboutContent.mission}</p></article></section>
    <section className="about-objectives"><h2>{aboutContent.objectivesTitle.toUpperCase()}</h2><ol className="objective-list">{aboutContent.objectives.map(item=><li key={item}>{item}</li>)}</ol></section>
    <section className="about-detail-card faculty-messages"><h2>FACULTY COORDINATOR MESSAGES</h2><p>{aboutContent.coordinatorMessage}</p><div className="coordinator-names"><span>Dr. M. R. N. Tagore</span><span>Dr. O. Aruna</span></div></section>
    <section className="history"><h2>BRANCH HISTORY</h2><p>{aboutContent.history}</p></section>
  </div></>;
}

export function Team() {
  return <><Seo title="Team" description="Meet the faculty coordinators, executive committee, webmasters, and committees of IEEE SB VVITU."/><div className="container page"><PageIntro eyebrow="Our people" title="The people behind the branch">A student community shaped by the time, ideas, and care of its members.</PageIntro>{committees.map((group,index)=><details className="team-group" key={group.name} open={index<2}><summary><span>{group.name}</span><span className="group-count">{group.members.length} profiles</span></summary><div className={`member-grid member-grid-${group.members.length}`}>{group.members.map((member,memberIndex)=><article className="member-card" key={memberIndex}><div className="avatar">{member.photo?<img src={member.photo} alt={`${member.name} portrait`} draggable={false} onDragStart={event=>event.preventDefault()} onContextMenu={event=>event.preventDefault()} style={{objectPosition: member.photoPosition ? `center ${member.photoPosition}` : undefined, transform: `scale(${member.photoScale || 1.2})`, transformOrigin: 'center'}}/>:<Users/>}</div><div><h3>{member.name}</h3><p>{member.position}</p><small>{member.department}</small></div></article>)}</div></details>)}</div></>;
}

export function Events() {
  return <><Seo title="Events" description="Explore technical, professional, and student-led activities by IEEE Student Branch VVITU."/><div className="container page"><PageIntro eyebrow="OUR EVENTS" title="Events">Explore our technical, professional, and student-led activities.</PageIntro>{events.length?<div className="event-grid event-grid-archive">{events.map(event=><EventCard key={event.slug} event={event}/>)}</div>:<div className="empty-state">Event information will be published here once verified details are available.</div>}</div></>;
}

export function EventDetail() {
  const { eventSlug } = useParams();
  const event = events.find(item => item.slug === eventSlug);
  if (!event) return <NotFound/>;
  const facts=[['Date',event.date],['Organizing / association information',event.organizer],['Time',event.time],['Venue',event.venue],['Participants',event.participants]].filter(([,value])=>value);
  const gallery=event.gallery||[];
  return <><Seo title={event.name} description={event.shortDescription}/><div className="container page event-detail-page"><Link to="/events" className="back-link">← All events</Link><div className="detail-grid"><div className="detail-poster-frame">{event.poster?<img className="detail-poster" src={event.poster} alt={event.posterAlt||`${event.name} poster`}/>:<div className="poster-placeholder detail-poster-placeholder">Poster coming soon</div>}</div><div className="event-detail-copy"><div className="eyebrow">{event.category}</div><h1>{event.name}</h1><p className="lead">{event.shortDescription}</p>{facts.length>0&&<dl className="detail-facts">{facts.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}{event.description&&<p>{event.description}</p>}{event.additionalInfo?.length>0&&<ul className="event-additional-info">{event.additionalInfo.map(item=><li key={item}>{item}</li>)}</ul>}{event.registrationLink&&<p><a className="text-link" href={event.registrationLink} target="_blank" rel="noreferrer">Registration website <ExternalLink size={15}/></a></p>}{event.reportLink&&<p><a className="text-link" href={event.reportLink} target="_blank" rel="noreferrer">Event report <ExternalLink size={15}/></a></p>}</div></div>{gallery.length>0&&<section className="event-additional-posters" aria-label="Additional event posters"><h2>Activity Posters</h2><div className="event-poster-gallery">{gallery.map(photo=><figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy"/><figcaption><h3>{photo.title}</h3>{photo.date&&<p><b>Date:</b> {photo.date}</p>}{photo.time&&<p><b>Time:</b> {photo.time}</p>}{photo.venue&&<p><b>Venue:</b> {photo.venue}</p>}{photo.participants&&<p>{photo.participants}</p>}{photo.description&&<p>{photo.description}</p>}</figcaption></figure>)}</div></section>}</div></>;
}

export function Gallery() {
  const supportedPhoto = photo => /\.(jpe?g|png|webp|avif)(?:\?.*)?$/i.test(photo.src);
  const albums = galleryAlbums.map(album => ({ ...album, photos: album.photos.filter(supportedPhoto) }));
  const [year, setYear] = useState('All Years');
  const [eventName, setEventName] = useState('All Events');
  const [lightbox, setLightbox] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const years = ['All Years', ...new Set([...albums.map(album => String(album.year)), '2024'])];
  years.splice(1, years.length - 1, ...years.slice(1).sort((a, b) => Number(b) - Number(a)));
  const eventNames = ['All Events', ...albums.map(album => album.event)];
  const shown = albums.filter(album => (year === 'All Years' || String(album.year) === year) && (eventName === 'All Events' || album.event === eventName));
  const currentAlbum = lightbox ? albums.find(album => album.eventSlug === lightbox.eventSlug) : null;
  const currentPhoto = currentAlbum?.photos[lightbox?.photoIndex];

  function closeLightbox() {
    setLightbox(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function moveLightbox(delta) {
    if (!currentAlbum?.photos.length) return;
    const photoIndex = (lightbox.photoIndex + delta + currentAlbum.photos.length) % currentAlbum.photos.length;
    setLightbox({ eventSlug: currentAlbum.eventSlug, photoIndex });
  }

  useEffect(() => {
    if (!currentPhoto) return undefined;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    function onKeyDown(event) {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll('button:not([disabled])');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (document.activeElement === dialogRef.current) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
        else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [currentPhoto, lightbox]);

  return <><Seo title="Gallery" description="Moments from IEEE Student Branch VVITU events, activities, and student community."/><div className="container page gallery-page">
    <PageIntro eyebrow="MOMENTS TOGETHER" title="Branch Gallery">Moments from our events, activities, and student community.</PageIntro>
    <div className="gallery-filters" aria-label="Gallery filters">
      <label>Year<select value={year} onChange={event => { setYear(event.target.value); setLightbox(null); }}><option>All Years</option>{years.slice(1).map(value => <option key={value}>{value}</option>)}</select></label>
      <label>Event<select value={eventName} onChange={event => { setEventName(event.target.value); setLightbox(null); }}><option>All Events</option>{eventNames.slice(1).map(value => <option key={value}>{value}</option>)}</select></label>
    </div>
    {shown.length ? shown.map(album => <section className="gallery-album" key={album.eventSlug} aria-labelledby={`album-${album.eventSlug}`}>
      <header className="gallery-album-heading"><div><h2 id={`album-${album.eventSlug}`}>{album.event}</h2>{album.date && <time>{album.date}</time>}</div></header>
      {album.photos.length ? <div className="gallery-photo-grid">{album.photos.map((photo, index) => <button className="gallery-photo" type="button" key={photo.src} aria-label={`Open ${photo.alt}`} onClick={event => { triggerRef.current = event.currentTarget; setLightbox({ eventSlug: album.eventSlug, photoIndex: index }); }}><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" draggable="false"/></button>)}</div> : <p className="gallery-empty-album">Photos will be added soon.</p>}
    </section>) : <div className="empty-state">No photos available for the selected filter.</div>}
  </div>
  {currentPhoto && <div className="gallery-lightbox" role="presentation" onClick={closeLightbox}>
    <div className="gallery-lightbox-dialog" role="dialog" aria-modal="true" aria-label={`${currentAlbum.event} photo viewer`} tabIndex={-1} ref={dialogRef} onClick={event => event.stopPropagation()}>
      <button className="gallery-lightbox-close" type="button" aria-label="Close photo viewer" onClick={closeLightbox}>×</button>
      <button className="gallery-lightbox-nav gallery-lightbox-prev" type="button" aria-label="Previous photo" disabled={currentAlbum.photos.length < 2} onClick={() => moveLightbox(-1)}>‹</button>
      <figure><img src={currentPhoto.src} alt={currentPhoto.alt}/><figcaption>{lightbox.photoIndex + 1} / {currentAlbum.photos.length}</figcaption></figure>
      <button className="gallery-lightbox-nav gallery-lightbox-next" type="button" aria-label="Next photo" disabled={currentAlbum.photos.length < 2} onClick={() => moveLightbox(1)}>›</button>
    </div>
  </div>}
  </>;
}

export function Contact() {
  const [state,setState]=useState('idle'),[error,setError]=useState('');
  async function submit(event){event.preventDefault();setError('');const form=event.currentTarget;if(!form.reportValidity())return;setState('sending');try{const response=await fetch(`${import.meta.env.VITE_API_URL||'http://localhost:5000/api'}/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form)))});if(!response.ok)throw new Error((await response.json()).error||'Unable to send your message.');setState('success');form.reset();}catch(err){setError(`${err.message} You can also contact the branch through its official channels.`);setState('error');}}
  return <><Seo title="Contact" description="Contact IEEE Student Branch VVITU and send the branch a message."/><div className="container page"><PageIntro eyebrow="Contact us" title="Start a conversation">Questions about the branch, activities, or getting involved? Send us a message.</PageIntro><div className="contact-grid"><div className="contact-info"><h2>We’d like to hear from you.</h2><p>Official contact details will be published once confirmed by the branch.</p><div className="contact-line"><Mail/><div><small>Email</small><b>{contactInfo.email}</b></div></div><div className="contact-line"><MapPin/><div><small>Visit</small><b>{contactInfo.address}</b></div></div><h3>Follow IEEE</h3><div className="social-links">{Object.entries(contactInfo.socialLinks).filter(([,url])=>url).map(([network,url])=><a key={network} href={url} target="_blank" rel="noreferrer">{network} <ExternalLink size={14}/></a>)}</div><div className="map-embed"><iframe src={contactInfo.mapEmbedUrl} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="VVITU campus map"/></div></div><form className="contact-form" onSubmit={submit}><h2>Send a message</h2><label>Name<input name="name" required minLength="2" autoComplete="name"/></label><label>Email<input name="email" type="email" required autoComplete="email"/></label><label>Subject<input name="subject" required minLength="3"/></label><label>Message<textarea name="message" rows="5" required minLength="10"/></label>{error&&<div role="alert" className="form-error">{error}</div>}{state==='success'&&<div role="status" className="form-success">Your message was received. Thank you.</div>}<button className="button button-blue" disabled={state==='sending'}>{state==='sending'?'Sending…':'Send message'} <Send size={16}/></button><small>Messages are sent to the development API. Delivery requires a configured submission store.</small></form></div></div></>;
}

export function Resources() {
  return <><Seo title="Resources" description="IEEE resources, branch documents, reports, and learning materials."/><div className="container page"><PageIntro eyebrow="Explore & learn" title="Resources">Useful links and documents for learning, professional development, and branch activities.</PageIntro><div className="resource-grid">{resources.map(([title,description,url,type])=><article className="resource-card" key={title}><div className="resource-icon"><BookOpen/></div><span className="tag">{type}</span><h2>{title}</h2><p>{description}</p>{url==='#'?<span className="muted">Coming soon</span>:<a href={url} target="_blank" rel="noreferrer" className="text-link">Open resource <ArrowUpRight size={15}/></a>}</article>)}</div></div></>;
}

export function NotFound() {
  return <div className="container page"><PageIntro eyebrow="404" title="This page isn’t here">The address may be out of date.</PageIntro><Link className="button button-blue" to="/">Return home <ArrowRight size={16}/></Link></div>;
}
