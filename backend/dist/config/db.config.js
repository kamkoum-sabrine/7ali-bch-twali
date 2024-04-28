"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
/**import mongoose from 'mongoose';

const uri = process.env.MONGODB_CONN || 'mongodb://localhost:27017/7ali-bch-twali';

export const connect = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true // Ajoutez cette option si nécessaire
    });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.error('Erreur de connexion à la base de données :', err);
    });
    db.once('open', () => {
        console.log('Connexion réussie à la base de données !');
    });
}**/
const mongoose_1 = __importDefault(require("mongoose"));
const uri = process.env.MONGODB_CONN || 'mongodb://localhost:27017/todo-app';
const connect = () => {
    mongoose_1.default.connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true // Ajoutez cette option si nécessaire
    });
    const db = mongoose_1.default.connection;
    db.on('error', (err) => {
        console.error('Erreur de connexion à la base de données :', err);
    });
    db.once('open', () => {
        console.log('Connexion réussie à la base de données !');
    });
};
exports.connect = connect;
/**export const connect = () => {
    mongoose.connect(uri, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Successfully Connected!");
        }
    });
}**/
