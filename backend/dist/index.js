"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("./config/app.config"));
const db_config_1 = require("./config/db.config");
const routes_1 = __importDefault(require("./routes"));
(0, db_config_1.connect)();
app_config_1.default.use('', routes_1.default);
app_config_1.default.get('/', (req, res) => {
    res.send('Hello World!');
});
let port = process.env.PORT || 8080;
let connected = false;
app_config_1.default.listen(port, () => {
    console.log('Server is running on port ' + port);
});
