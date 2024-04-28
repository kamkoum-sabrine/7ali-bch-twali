"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineTodoRoutes = void 0;
// todo.routes.js
const express = require('express');
const router = express.Router();
// Définissez vos routes ici
router.get('/', (req, res) => {
    res.send('Route TODO');
});
// Exportez la fonction de définition des routes
/**module.exports = function (app: any) {
    app.use('/todo', router);
}**/
function defineTodoRoutes(app) {
    app.use('/todo', router);
}
exports.defineTodoRoutes = defineTodoRoutes;
