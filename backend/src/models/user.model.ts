import mongoose from "mongoose";
//import mongoosePaginate from "mongoose-paginate"

let userSchema = new mongoose.Schema({
    cin: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

//userSchema.plugin(mongoosePaginate)
const User = mongoose.model("User", userSchema)
export default User;