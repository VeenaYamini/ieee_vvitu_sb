import { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Mail, MapPin, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { siteInfo } from '../data/site.js';
const links=[['Home','/'],['About','/about'],['Team','/team'],['Events','/events'],['Gallery','/gallery'],['Resources','/resources'],['Contact','/contact']];

export function Header(){
  const [open,setOpen]=useState(false);
  const location=useLocation();
  const navigate=useNavigate();
  return <header className="header"><div className="container nav-wrap">
    <Link className="brand" to="/" onClick={()=>setOpen(false)}><img src={siteInfo.branchLogo} alt={`${siteInfo.organization} ${siteInfo.branch} logo`}/><span><b>{siteInfo.shortName}</b><small>{siteInfo.branch} · Student Branch</small></span></Link>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
    <nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{links.map(([name,path])=>name==='Team'?<div className="nav-team" key={path}><select className={`team-nav-select${location.pathname.startsWith('/team')?' active':''}`} aria-label="Team page and academic year" value={location.pathname==='/team/2025-2026'?'2025-2026':location.pathname==='/team/2026-2027'?'2026-2027':'team'} onChange={event=>{navigate(event.target.value==='team'?'/team':`/team/${event.target.value}`);setOpen(false)}}><option value="team">Team</option><option value="2026-2027">2026–2027</option><option value="2025-2026">2025–2026</option></select></div>:<NavLink key={path} to={path} end={path==='/'} onClick={()=>setOpen(false)}>{name}</NavLink>)}</nav>
    <a className="university-mark" href={siteInfo.universityWebsite} aria-label={`${siteInfo.university} official website`}><img src={siteInfo.universityLogo} alt="VVITU logo"/></a>
  </div></header>;
}

export function Footer(){
  return <footer className="footer"><div className="container footer-grid">
    <div><div className="footer-brand"><img src={siteInfo.branchLogo} alt={`${siteInfo.organization} ${siteInfo.branch} logo`}/><div><b>{siteInfo.organization}</b><span>{siteInfo.university}</span></div></div><p>A community for students to learn, build, and share knowledge in engineering and technology.</p><a href={siteInfo.universityWebsite} className="text-link" target="_blank" rel="noreferrer">VVITU official website <ArrowUpRight size={14}/></a></div>
    <div><h3>Explore</h3><div className="footer-links">{links.slice(1).map(([name,path])=><Link key={path} to={path}>{name}</Link>)}</div></div>
    <div><h3>Get in touch</h3><p><MapPin size={16}/>{siteInfo.address}</p><p><Mail size={16}/><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p><div className="socials">{siteInfo.socialLinks.instagram&&<a href={siteInfo.socialLinks.instagram} aria-label="Instagram"><Instagram/></a>}{siteInfo.socialLinks.linkedin&&<a href={siteInfo.socialLinks.linkedin} aria-label="LinkedIn"><Linkedin/></a>}</div></div>
  </div><div className="container copyright"><span>© {new Date().getFullYear()} {siteInfo.organization}, {siteInfo.branch}</span></div></footer>;
}
export default function Layout({children}){return <><Header/><main>{children}</main><Footer/></>;}
