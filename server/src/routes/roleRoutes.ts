import { Router } from 'express';
import { getRoles, createRole } from '../controllers/roleController';

const router = Router();

router.get('/', getRoles);
router.post('/', createRole);

export default router;
