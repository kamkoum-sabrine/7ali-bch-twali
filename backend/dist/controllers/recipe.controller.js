"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refuseRecipe = exports.acceptRecipe = exports.deleteRecipe = exports.create = exports.getApprouvedRecipe = exports.findAll = void 0;
const recipe_model_1 = __importDefault(require("../models/recipe.model"));
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipe_model_1.default.find({})
            .populate('chef')
            .exec();
        return res.status(200).json(recipes);
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
});
exports.findAll = findAll;
const getApprouvedRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipe_model_1.default.find({ state: 1 })
            .populate('chef')
            .exec();
        return res.status(200).json(recipes);
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
});
exports.getApprouvedRecipe = getApprouvedRecipe;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = new recipe_model_1.default(req.body);
        const savedRecipe = yield recipe.save();
        return res.status(201).json(savedRecipe);
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
});
exports.create = create;
const deleteRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipeId } = req.body;
    try {
        const deletedRecipe = yield recipe_model_1.default.findOneAndDelete({ _id: recipeId });
        if (!deletedRecipe) {
            return res.status(404).send("Recette non trouvé");
        }
        return res.status(200).json(deletedRecipe);
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
});
exports.deleteRecipe = deleteRecipe;
const acceptRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipeId = req.body.recipeId;
        // Mettre à jour le champ 'state' à 1 pour la recette spécifiée
        yield recipe_model_1.default.findOneAndUpdate({ _id: recipeId }, { $set: { state: 1 } }, { new: true });
        return res.status(200).json({ message: 'Recette marquée comme acceptée avec succès' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Erreur interne du serveur');
    }
});
exports.acceptRecipe = acceptRecipe;
const refuseRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipeId = req.body.recipeId;
        // Mettre à jour le champ 'state' à 1 pour la recette spécifiée
        yield recipe_model_1.default.findOneAndUpdate({ _id: recipeId }, { $set: { state: -1 } }, { new: true });
        return res.status(200).json({ message: 'Recette marquée comme refusée avec succès' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Erreur interne du serveur');
    }
});
exports.refuseRecipe = refuseRecipe;
