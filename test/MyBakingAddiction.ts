import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.mybakingaddiction.com/cherry-hand-pies-recipe/"
    );
});

describe("MyBakingAddiction", function () {
    describe("https://www.mybakingaddiction.com/cherry-hand-pies-recipe/", function () {
        it(`should be authored by "Jamie Lothridge"`, function () {
            assert.equal(recipe.author, "Jamie Lothridge");
        });

        it(`should be titled "Cherry Hand Pies"`, function () {
            assert.equal(recipe.title, "Cherry Hand Pies");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "Pie crust for 9-inch double-crust pie",
                "2 cups homemade cherry pie filling",
                "Coarse sugar or turbinado sugar",
                "1 large egg",
                "1 tablespoon water"
            ]);
        });
    });
});
