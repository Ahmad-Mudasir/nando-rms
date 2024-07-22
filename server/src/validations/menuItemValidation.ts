import { body } from 'express-validator';

export const createMenuItemValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    // Add more validation rules as needed
];

export const updateMenuItemValidation = [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
    body('price').optional().isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    // Add more validation rules as needed
];
