/**import express from 'express';
import { defineUserRoutes } from './user.routes';
const router = express.Router();

//require('./todo.routes')(router);


defineUserRoutes(router);


export default router**/
import express from 'express';

const router = express.Router();

require('./user.routes')(router);
require('./role.routes')(router);
require('./recipe.routes')(router)

export default router