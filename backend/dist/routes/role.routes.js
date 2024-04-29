"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_controller_1 = require("../controllers/role.controller");
/**export function defineRoleRoutes(app: any) {
    app.use('/', router);
}

import { Router } from 'express';
import { create, findAll } from '../controllers/role.controller';

const router = Router();**/
module.exports = (app) => {
    // Create a new todo
    app.post("/roles/create", role_controller_1.create);
    // Get all todos
    app.get("/roles", role_controller_1.findAll);
};
