import {Router} from 'express';import {listResources} from '../controllers/resources.js';
const router=Router();router.get('/',listResources);export default router;
