import { body } from 'express-validator';

export const createUserValidation = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // Add more validation rules as needed
];

export const updateUserValidation = [
    body('username').optional().notEmpty().withMessage('Username cannot be empty'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // Add more validation rules as needed
];
