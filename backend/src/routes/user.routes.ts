export function defineUserRoutes(app: any) {
    app.use('/', router);
}

import { Router } from 'express';
import { create, findAll } from '../controllers/user.controller';

const router = Router();

// Définissez les routes pour les utilisateurs
router.get('/users', findAll);
router.post("/users/create", create);

export default router;
