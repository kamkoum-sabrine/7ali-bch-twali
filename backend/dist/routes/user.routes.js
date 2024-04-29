"use strict";
/**export function defineUserRoutes(app: any) {
    app.use('/', router);
}

import { Router } from 'express';
import { create, deleteUser, findAll } from '../controllers/user.controller';

const router = Router();

// Définissez les routes pour les utilisateurs
router.get('/users', findAll);
router.post("/users/create", create);

router.delete("/users", deleteUser)


export default router;

import { create, findAll } from "../controllers/role.controller";**/
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
/**export function defineRoleRoutes(app: any) {
    app.use('/', router);
}

import { Router } from 'express';
import { create, findAll } from '../controllers/role.controller';

const router = Router();**/
module.exports = (app) => {
    app.get('/users', user_controller_1.findAll);
    app.post("/users/create", user_controller_1.create);
};
