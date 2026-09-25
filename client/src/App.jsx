import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { Home, About, Team, Events, EventDetail, Gallery, Contact, Resources, NotFound } from './pages/Pages.jsx';
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/team" element={<Team/>}/><Route path="/team/2026-2027" element={<Team/>}/><Route path="/events" element={<Events/>}/><Route path="/events/:eventSlug" element={<EventDetail/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/contact" element={<Contact/>}/><Route path="/resources" element={<Resources/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>}
