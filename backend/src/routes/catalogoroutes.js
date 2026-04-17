import { Router } from 'express';
import { getCatalogos } from '../controllers/controller.js';

const router = Router();

router.get('/', getCatalogos);  

export default router;