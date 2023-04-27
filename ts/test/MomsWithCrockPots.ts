import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("MomsWithCrockPots", function () {
    describe("https://momswithcrockpots.com/crockpot-french-toast-casserole/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://momswithcrockpots.com/crockpot-french-toast-casserole/"
            );
        });

        it(`should be authored by "Amanda@AFewShortCuts.com"`, function () {
            assert.equal(recipe.author, "Amanda@AFewShortCuts.com");
        });

        it(`should be titled "Crockpot French Toast Casserole"`, function () {
            assert.equal(recipe.title, "Crockpot French Toast Casserole");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 loaf bread diced (stale works great)",
                "6 eggs",
                "2 cups milk Dairy Free Alternative can be used",
                "1/2 tsp cinnamon",
                "1/4 cup butter or Dairy Free Margarine Softened",
                "1/2 cup firmly packed brown sugar",
                "1 tsp cinnamon",
                "1/2 cup chopped pecans",
                "Dash of nutmeg",
            ]);
        });
    });
});
