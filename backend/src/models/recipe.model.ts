import mongoose, { Schema, Document, Types } from "mongoose";

interface Recipe extends Document {
    title: string;
    details: string;
    chef: Types.ObjectId;
    state: number;
}

const recipeSchema: Schema<Recipe> = new Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    state: { type: Number, required: true, default: 0 },
    chef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Recipe = mongoose.model<Recipe>("Recipe", recipeSchema);
export default Recipe;
