import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://cookieandkate.com/turmeric-tea-recipe/");
});

describe("CookieAndKate", function () {
    describe("https://cookieandkate.com/turmeric-tea-recipe/", function () {
        it(`should be titled "Fresh Turmeric Tea"`, function () {
            assert.equal(recipe.title, "Fresh Turmeric Tea");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "One 2-inch nub of fresh turmeric (no need to peel)",
                "1 cup water",
                "Optional: Lemon or orange round, honey or maple syrup"
            ]);
        });
    });
});
