import {store} from '../models/store.js';
export const listEvents=(_req,res)=>res.json(store.events);
export const getEvent=(req,res)=>{const event=store.events.find(item=>item.slug===req.params.slug);return event?res.json(event):res.status(404).json({error:'Event not found'});};
