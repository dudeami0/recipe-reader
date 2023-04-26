import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.eatingwell.com/recipe/7949982/cucumber-vinegar-salad/"
    );
});

describe("EatingWell", function () {
    describe("https://www.eatingwell.com/recipe/7949982/cucumber-vinegar-salad/", function () {
        it(`should be titled "Cucumber Vinegar Salad"`, function () {
            assert.equal(recipe.title, "Cucumber Vinegar Salad");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "6 Persian cucumbers",
                "2 teaspoons granulated sugar",
                "½ teaspoon salt",
                "1 cup thinly sliced red onion",
                "¼ cup white-wine vinegar",
                "2 tablespoons chopped fresh dill",
                "¼ teaspoon ground pepper"
            ]);
        });
    });
});
