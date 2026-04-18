import { Router } from 'express';
import { getAll, getById, getByCatalogo, create, update, remove } from '../controllers/controller.js';

const router = Router();

router.get('/', getAll);
router.post('/', create);
router.get('/catalogo/:catalogo_id', getByCatalogo);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;