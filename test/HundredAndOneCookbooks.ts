import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://www.101cookbooks.com/shredded-egg-salad/");
});

describe("HundredAndOneCookbooks", function () {
    describe("https://www.101cookbooks.com/shredded-egg-salad/", function () {
        it(`should be titled "Shredded Egg Salad"`, function () {
            assert.equal(recipe.title, "Shredded Egg Salad");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "6 eggs",
                "1/4 teaspoon salt",
                "1/4 teaspoon pepper",
                "1 small head of radicchio, shredded",
                "1/4 cup chopped fresh dill",
                "1 medium shallot, chopped",
                "3 baby radishes, shaved thin",
                "to serve: little dollop of salted creme fraiche and/or a drizzle of olive oil."
            ]);
        });
    });
});
