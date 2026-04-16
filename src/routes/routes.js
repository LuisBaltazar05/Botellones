import { Router } from 'express';
import { 
  getAll, 
  getById, 
  getByCatalogo,
  create 
} from '../controllers/controller.js';

const router = Router();

router.get('/', getAll);                          
router.get('/:id', getById);                      
router.get('/catalogo/:catalogo_id', getByCatalogo);
router.post('/', create);                          

export default router;