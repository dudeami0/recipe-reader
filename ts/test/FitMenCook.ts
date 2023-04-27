import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("FitMenCook", function () {
    describe("https://fitmencook.com/recipes/white-navy-bean-dip-sourdough-toast/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://fitmencook.com/recipes/white-navy-bean-dip-sourdough-toast/"
            );
        });

        it(`should be authored by "Kevin Curry"`, function () {
            assert.equal(recipe.author, "Kevin Curry");
        });

        it(`should be titled "White Navy Bean Dip on Sourdough Toast"`, function () {
            assert.equal(
                recipe.title,
                "White Navy Bean Dip on Sourdough Toast"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 garlic bulb",
                "1 teaspoon of olive oil",
                "pinch of sea salt",
                "2 cans (30oz) white beans",
                "1/4 cup olive oil",
                "1 tbsp The Fit Cook Land herb seasoning",
                "1 tsp white or black pepper",
                "Juice from 1 lemon",
                "Sea salt & pepper to taste",
            ]);
        });
    });
});
