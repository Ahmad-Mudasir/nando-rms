import { Router } from 'express';
import { getMenuCategories, createMenuCategory } from '../controllers/menuCategoryController';

const router = Router();

router.get('/', getMenuCategories);
router.post('/', createMenuCategory);

export default router;
