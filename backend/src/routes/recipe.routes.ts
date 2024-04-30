import { acceptRecipe, create, deleteRecipe, findAll, getApprouvedRecipe, refuseRecipe } from "../controllers/recipe.controller";

module.exports = (app: any) => {

    app.post("/recipe/create", create);

    app.get("/recipe", findAll);
    app.get("/recipe/approuved", getApprouvedRecipe);

    app.delete("/recipe/delete", deleteRecipe);

    app.put("/recipe/accept", acceptRecipe);

    app.put("/recipe/refuse", refuseRecipe);
}

