import mongoose from "mongoose";
//import mongoosePaginate from "mongoose-paginate"

let roleSchema = new mongoose.Schema({
    name: { type: String, required: true },

});

//userSchema.plugin(mongoosePaginate)
const Role = mongoose.model("Role", roleSchema)
export default Role;