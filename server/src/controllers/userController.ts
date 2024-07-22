import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export const getUsers = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const newUser = userRepository.create(req.body);
    await userRepository.save(newUser);
    res.json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const { id } = req.params;
    const updatedData = req.body;

    const user = await userRepository.findOne(id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    userRepository.merge(user, updatedData);
    const updatedUser = await userRepository.save(user);

    res.json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const { id } = req.params;

    const result = await userRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(204).send(); // No content to send back
};
