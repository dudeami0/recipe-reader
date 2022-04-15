import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.cookinglight.com/recipes/no-bake-banoffee-pie"
    );
});

describe("CookingLight", function () {
    describe("https://www.cookinglight.com/recipes/no-bake-banoffee-pie", function () {
        it(`should be authored by "Cooking Light"`, function () {
            assert.equal(recipe.author, "Cooking Light");
        });

        it(`should be titled "No-Bake Banoffee Pie"`, function () {
            assert.equal(recipe.title, "No-Bake Banoffee Pie");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 1/2 cups graham crackers",
                "5 unsalted bugger, melted",
                "1/2 teaspoon salt",
                "2 cups medjool dates, pitted",
                "2 tablespoons tahini",
                "1/2 teaspoon salt",
                "1/2 cup light coconut milk",
                "1/2 cup heavy cream",
                "1/2 teaspoon vanilla extract",
                "3 bananas, sliced thinly",
                "2 squares dark chocolate, shaved"
            ]);
        });
    });
});
