import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("EatingWell", function () {
    describe("https://www.eatingwell.com/recipe/7949982/cucumber-vinegar-salad/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.eatingwell.com/recipe/7949982/cucumber-vinegar-salad/"
            );
        });

        it(`should be titled "Cucumber Vinegar Salad"`, function () {
            assert.equal(recipe.title, "Cucumber Vinegar Salad");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "6 Persian cucumbers",
                "2 teaspoons granulated sugar",
                "0.5 teaspoon salt",
                "1 cup thinly sliced red onion",
                "0.25 cup white-wine vinegar",
                "2 tablespoons chopped fresh dill",
                "0.25 teaspoon ground pepper",
            ]);
        });
    });
});
