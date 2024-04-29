import { Request, Response } from 'express';
import Role from '../models/role.model';


export const findAll = async (req: Request, res: Response) => {
    try {
        const roles = await Role.find({}).exec();
        return res.status(200).json(roles);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const role = new Role(req.body);
        const savedRole = await role.save();
        return res.status(201).json(savedRole);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
};
