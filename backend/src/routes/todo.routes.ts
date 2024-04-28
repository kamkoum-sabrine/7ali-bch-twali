// todo.routes.js
const express = require('express');
const router = express.Router();

// Définissez vos routes ici
router.get('/', (req: any, res: any) => {
    res.send('Route TODO');
});

// Exportez la fonction de définition des routes
/**module.exports = function (app: any) {
    app.use('/todo', router);
}**/
export function defineTodoRoutes(app: any) {
    app.use('/todo', router);
}