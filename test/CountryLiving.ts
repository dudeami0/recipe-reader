import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.countryliving.com/food-drinks/recipes/a5499/cowboy-brisket-recipe-clx0914/"
    );
});

describe("CountryLiving", function () {
    describe("https://www.countryliving.com/food-drinks/recipes/a5499/cowboy-brisket-recipe-clx0914/", function () {
        it(`should be authored by "Marian Cooper Cairns"`, function () {
            assert.equal(recipe.author, "Marian Cooper Cairns");
        });

        it(`should be titled "Cowboy Brisket"`, function () {
            assert.equal(recipe.title, "Cowboy Brisket");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 tbsp. cowboy rub (such as McCormick Cattlemen's)",
                "1 tbsp. dark brown sugar",
                "2 tsp. smoked paprika",
                "1 1/2 tsp. kosher salt",
                "1 tsp. ground cumin",
                "1 (6-pound) flat-cut brisket",
                "1 large sweet onion, sliced",
                "3 garlic cloves, minced",
                "1 c. chopped fresh cilantro"
            ]);
        });
    });
});
