import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.bigoven.com/recipe/easy-peanut-butter-cookies/170374"
    );
});

describe("BigOven", function () {
    describe("https://www.bigoven.com/recipe/easy-peanut-butter-cookies/170374", function () {
        it(`should be authored by "wvufan1011"`, function () {
            assert.equal(recipe.author, "wvufan1011");
        });

        it(`should be titled "Easy Peanut Butter Cookies`, function () {
            assert.equal(recipe.title, "Easy Peanut Butter Cookies");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 cup Peanut Butter",
                "1 Egg",
                "1 cup Sugar"
            ]);
        });
    });
});
