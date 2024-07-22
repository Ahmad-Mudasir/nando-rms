import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Order } from '../entities/Order';

export const getOrders = async (req: Request, res: Response) => {
    const orderRepository = getRepository(Order);
    const orders = await orderRepository.find({ relations: ['menuItems'] });
    res.json(orders);
};

export const createOrder = async (req: Request, res: Response) => {
    const orderRepository = getRepository(Order);
    const newOrder = orderRepository.create(req.body);
    await orderRepository.save(newOrder);
    res.json(newOrder);
};

export const updateOrder = async (req: Request, res: Response) => {
    const orderRepository = getRepository(Order);
    const { id } = req.params;
    const updatedData = req.body;

    const order = await orderRepository.findOne(id);

    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }

    orderRepository.merge(order, updatedData);
    const updatedOrder = await orderRepository.save(order);

    res.json(updatedOrder);
};

export const deleteOrder = async (req: Request, res: Response) => {
    const orderRepository = getRepository(Order);
    const { id } = req.params;

    const result = await orderRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Order not found' });
    }

    res.status(204).send(); // No content to send back
};
