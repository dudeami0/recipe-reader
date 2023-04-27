import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("RealSimple", function () {
    describe("https://www.realsimple.com/food-recipes/browse-all-recipes/plum-tart", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.realsimple.com/food-recipes/browse-all-recipes/plum-tart"
            );
        });

        it(`should be authored by "Kate Merker, Sara Quessenberry"`, function () {
            assert.equal(recipe.author, "Kate Merker, Sara Quessenberry");
        });

        it(`should be titled "Plum Tart Recipe"`, function () {
            assert.equal(recipe.title, "Plum Tart Recipe");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 thawed puff pastry sheet (half of a 17.3-oz. package), thawed",
                "3 red plums, thinly sliced",
                "2 tablespoons sugar",
            ]);
        });
    });
});
