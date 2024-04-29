/**import mongoose from "mongoose";
//import mongoosePaginate from "mongoose-paginate"

let roleSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

//userSchema.plugin(mongoosePaginate)
const Role = mongoose.model("Role", roleSchema)
export default Role;**/

import mongoose, { Schema, Document, Types } from "mongoose";

interface Role extends Document {
    name: String;
}

const roleSchema: Schema<Role> = new Schema({
    name: { type: String, required: true }
});

const Role = mongoose.model<Role>("Role", roleSchema);
export default Role;
