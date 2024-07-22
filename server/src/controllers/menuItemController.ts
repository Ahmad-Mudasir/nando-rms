import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { MenuItem } from '../entities/MenuItem';

export const getMenuItems = async (req: Request, res: Response) => {
    const itemRepository = getRepository(MenuItem);
    const items = await itemRepository.find({ relations: ['category'] });
    res.json(items);
};

export const createMenuItem = async (req: Request, res: Response) => {
    const itemRepository = getRepository(MenuItem);
    const newItem = itemRepository.create(req.body);
    await itemRepository.save(newItem);
    res.json(newItem);
};

export const updateMenuItem = async (req: Request, res: Response) => {
    const itemRepository = getRepository(MenuItem);
    const { id } = req.params;
    const updatedData = req.body;

    const item = await itemRepository.findOne(id);

    if (!item) {
        return res.status(404).json({ message: 'Menu item not found' });
    }

    itemRepository.merge(item, updatedData);
    const updatedItem = await itemRepository.save(item);

    res.json(updatedItem);
};

export const deleteMenuItem = async (req: Request, res: Response) => {
    const itemRepository = getRepository(MenuItem);
    const { id } = req.params;

    const result = await itemRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Menu item not found' });
    }

    res.status(204).send(); // No content to send back
};
