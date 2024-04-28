"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = (0, express_1.default)();
app.use(cors());
app.use(body_parser_1.default.json());
exports.default = app;
