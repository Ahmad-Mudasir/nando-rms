



import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { MenuCategory } from '../entities/MenuCategory';

export const getMenuCategories = async (req: Request, res: Response) => {
    const categoryRepository = getRepository(MenuCategory);
    const categories = await categoryRepository.find();
    res.json(categories);
};

export const createMenuCategory = async (req: Request, res: Response) => {
    const categoryRepository = getRepository(MenuCategory);
    const newCategory = categoryRepository.create(req.body);
    await categoryRepository.save(newCategory);
    res.json(newCategory);
};

export const updateMenuCategory = async (req: Request, res: Response) => {
    const categoryRepository = getRepository(MenuCategory);
    const { id } = req.params;
    const updatedData = req.body;

    const category = await categoryRepository.findOne(id);

    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }

    categoryRepository.merge(category, updatedData);
    const updatedCategory = await categoryRepository.save(category);

    res.json(updatedCategory);
};

export const deleteMenuCategory = async (req: Request, res: Response) => {
    const categoryRepository = getRepository(MenuCategory);
    const { id } = req.params;

    const result = await categoryRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.status(204).send(); // No content to send back
};
