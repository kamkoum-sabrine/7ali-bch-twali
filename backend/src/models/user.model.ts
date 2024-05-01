import mongoose, { Schema, Document, Types } from "mongoose";

interface User extends Document {
    cin: number;
    firstname: string;
    lastname: string;
    birthDate: Date;
    email: string;
    password: string;
    role: Types.ObjectId;
    image: string;
}

const userSchema: Schema<User> = new Schema({
    cin: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    },
    image: { type: String, required: false }
});

const User = mongoose.model<User>("User", userSchema);
export default User;
