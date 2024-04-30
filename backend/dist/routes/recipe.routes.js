"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_controller_1 = require("../controllers/recipe.controller");
module.exports = (app) => {
    app.post("/recipe/create", recipe_controller_1.create);
    app.get("/recipe", recipe_controller_1.findAll);
    app.get("/recipe/approuved", recipe_controller_1.getApprouvedRecipe);
    app.delete("/recipe/delete", recipe_controller_1.deleteRecipe);
    app.put("/recipe/accept", recipe_controller_1.acceptRecipe);
    app.put("/recipe/refuse", recipe_controller_1.refuseRecipe);
};
