"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineUserRoutes = void 0;
function defineUserRoutes(app) {
    app.use('/', router);
}
exports.defineUserRoutes = defineUserRoutes;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
// Définissez les routes pour les utilisateurs
router.get('/users', user_controller_1.findAll);
exports.default = router;
