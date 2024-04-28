import express from 'express';
import { defineTodoRoutes } from './todo.routes';
const router = express.Router();

//require('./todo.routes')(router);


defineTodoRoutes(router);

export default router