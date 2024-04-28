import express from 'express';
import { defineUserRoutes } from './user.routes';
const router = express.Router();

//require('./todo.routes')(router);


defineUserRoutes(router);

export default router