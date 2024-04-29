import { acceptRecipe, create, deleteRecipe, findAll, refuseRecipe } from "../controllers/recipe.controller";

module.exports = (app: any) => {

    app.post("/recipe/create", create);

    app.get("/recipe", findAll);

    app.delete("/recipe/delete", deleteRecipe);

    app.put("/recipe/accept", acceptRecipe);

    app.put("/recipe/refuse", refuseRecipe);
}

