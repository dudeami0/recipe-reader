import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("AllRecipes", function () {
    describe("https://www.allrecipes.com/recipe/14745/honey-glazed-ham/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.allrecipes.com/recipe/14745/honey-glazed-ham/"
            );
        });

        it(`should be authored by "Colleen"`, function () {
            assert.equal(recipe.author, "Colleen");
        });

        it(`should be titled "Honey Glazed Ham"`, function () {
            assert.equal(recipe.title, "Honey Glazed Ham");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 (5 pound) ready-to-eat ham",
                "0.25 cup whole cloves",
                "0.25 cup dark corn syrup",
                "2 cups honey",
                "0.66666668653488 cup butter",
            ]);
        });
    });
});
