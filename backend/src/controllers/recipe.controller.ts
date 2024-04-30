import { Request, Response } from 'express';
import Recipe from '../models/recipe.model';

export const findAll = async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find({})
            .populate('chef')
            .exec();
        return res.status(200).json(recipes);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
};
export const getApprouvedRecipe = async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find({ state: 1 })
            .populate('chef')
            .exec();
        return res.status(200).json(recipes);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const recipe = new Recipe(req.body);
        const savedRecipe = await recipe.save();
        return res.status(201).json(savedRecipe);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
};

export const deleteRecipe = async (req: Request, res: Response) => {
    const { recipeId } = req.body;
    try {
        const deletedRecipe = await Recipe.findOneAndDelete({ _id: recipeId });
        if (!deletedRecipe) {
            return res.status(404).send("Recette non trouvé");
        }
        return res.status(200).json(deletedRecipe);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).send('Internal Server Error');
    }
};

export const acceptRecipe = async (req: Request, res: Response) => {
    try {
        const recipeId = req.body.recipeId;

        // Mettre à jour le champ 'state' à 1 pour la recette spécifiée
        await Recipe.findOneAndUpdate(
            { _id: recipeId },
            { $set: { state: 1 } },
            { new: true }
        );

        return res.status(200).json({ message: 'Recette marquée comme acceptée avec succès' });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erreur interne du serveur');
    }
};


export const refuseRecipe = async (req: Request, res: Response) => {
    try {
        const recipeId = req.body.recipeId;

        // Mettre à jour le champ 'state' à 1 pour la recette spécifiée
        await Recipe.findOneAndUpdate(
            { _id: recipeId },
            { $set: { state: -1 } },
            { new: true }
        );

        return res.status(200).json({ message: 'Recette marquée comme refusée avec succès' });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erreur interne du serveur');
    }
};

