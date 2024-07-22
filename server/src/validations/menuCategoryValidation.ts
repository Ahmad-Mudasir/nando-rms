import { body } from 'express-validator';

export const createMenuCategoryValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    // Add more validation rules as needed
];

export const updateMenuCategoryValidation = [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
    // Add more validation rules as needed
];
