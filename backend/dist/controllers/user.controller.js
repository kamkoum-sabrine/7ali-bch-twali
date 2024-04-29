"use strict";
/**import { Request, Response } from 'express';
import User from "../models/user.model";


export const findAll = (req: Request, res: Response) => {
    User.find({}, (err: any, users: any) => {
        if (err) res.status(500).send(err);
        else res.send(users);
    });
};**/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.create = exports.findAll = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find({})
            .populate('role') // Populer le champ 'role' avec les détails du rôle
            .exec();
        return res.status(200).json(users);
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
});
exports.findAll = findAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_model_1.default(req.body);
        const savedUser = yield user.save();
        return res.status(201).json(savedUser);
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
});
exports.create = create;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        console.log("userId: " + userId);
        const utilisateurSupprime = yield user_model_1.default.findOneAndDelete({ _id: userId });
        if (!utilisateurSupprime) {
            return res.status(404).send("Utilisateur non trouvé");
        }
        return res.status(200).json(utilisateurSupprime);
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
});
exports.deleteUser = deleteUser;
