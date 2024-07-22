import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Authorization token is required');
    }

    try {
        // Verify token logic
        next();
    } catch (error) {
        return res.status(401).send('Unauthorized');
    }
};
