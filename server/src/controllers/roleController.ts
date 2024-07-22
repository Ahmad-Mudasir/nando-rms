import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Role } from '../entities/Role';

export const getRoles = async (req: Request, res: Response) => {
    const roleRepository = getRepository(Role);
    const roles = await roleRepository.find();
    res.json(roles);
};

export const createRole = async (req: Request, res: Response) => {
    const roleRepository = getRepository(Role);
    const newRole = roleRepository.create(req.body);
    await roleRepository.save(newRole);
    res.json(newRole);
};

export const updateRole = async (req: Request, res: Response) => {
    const roleRepository = getRepository(Role);
    const { id } = req.params;
    const updatedData = req.body;

    const role = await roleRepository.findOne(id);

    if (!role) {
        return res.status(404).json({ message: 'Role not found' });
    }

    roleRepository.merge(role, updatedData);
    const updatedRole = await roleRepository.save(role);

    res.json(updatedRole);
};

export const deleteRole = async (req: Request, res: Response) => {
    const roleRepository = getRepository(Role);
    const { id } = req.params;

    const result = await roleRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Role not found' });
    }

    res.status(204).send(); // No content to send back
};
