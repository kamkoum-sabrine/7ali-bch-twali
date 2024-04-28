"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./user.routes");
const router = express_1.default.Router();
//require('./todo.routes')(router);
(0, user_routes_1.defineUserRoutes)(router);
exports.default = router;
