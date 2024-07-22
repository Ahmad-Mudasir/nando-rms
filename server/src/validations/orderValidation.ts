import { body } from 'express-validator';

export const createOrderValidation = [
    body('userId').notEmpty().withMessage('User ID is required'),
    body('menuItems').isArray().withMessage('Menu items should be an array'),
    // Add more validation rules as needed
];

export const updateOrderValidation = [
    body('userId').optional().notEmpty().withMessage('User ID cannot be empty'),
    body('menuItems').optional().isArray().withMessage('Menu items should be an array'),
    // Add more validation rules as needed
];
