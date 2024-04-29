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

import { create, findAll } from "../controllers/user.controller";

/**export function defineRoleRoutes(app: any) {
    app.use('/', router);
}

import { Router } from 'express';
import { create, findAll } from '../controllers/role.controller';

const router = Router();**/

module.exports = (app: any) => {
    app.get('/users', findAll);
    app.post("/users/create", create);
}


