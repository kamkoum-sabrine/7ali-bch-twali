/**import { Request, Response } from 'express';
import User from "../models/user.model";


export const findAll = (req: Request, res: Response) => {
    User.find({}, (err: any, users: any) => {
        if (err) res.status(500).send(err);
        else res.send(users);
    });
};**/

import { Request, Response } from 'express';
import User from "../models/user.model";

export const findAll = async (req: Request, res: Response) => {
    try {
        const users = await User.find({}).exec();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
};
