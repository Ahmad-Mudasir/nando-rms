import { body } from 'express-validator';

export const createRoleValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    // Add more validation rules as needed
];

export const updateRoleValidation = [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
    // Add more validation rules as needed
];
