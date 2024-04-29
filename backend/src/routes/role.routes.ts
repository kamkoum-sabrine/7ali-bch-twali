import { create, findAll } from "../controllers/role.controller";

/**export function defineRoleRoutes(app: any) {
    app.use('/', router);
}

import { Router } from 'express';
import { create, findAll } from '../controllers/role.controller';

const router = Router();**/
module.exports = (app: any) => {


    // Create a new todo
    app.post("/roles/create", create);

    // Get all todos
    app.get("/roles", findAll);


}

