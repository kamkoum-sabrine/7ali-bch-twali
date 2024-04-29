"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//import mongoosePaginate from "mongoose-paginate"
let userSchema = new mongoose_1.default.Schema({
    cin: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
//userSchema.plugin(mongoosePaginate)
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
