import {store} from '../models/store.js';
export const listResources=(_req,res)=>res.json(store.resources);
