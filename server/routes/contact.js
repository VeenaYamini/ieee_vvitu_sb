import {Router} from 'express';import {submitContact} from '../controllers/contact.js';
const router=Router();router.post('/',submitContact);export default router;
