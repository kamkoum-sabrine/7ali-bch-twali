"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_routes_1 = require("./todo.routes");
const router = express_1.default.Router();
//require('./todo.routes')(router);
(0, todo_routes_1.defineTodoRoutes)(router);
exports.default = router;
