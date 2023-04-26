import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.tasteofhome.com/recipes/quick-tater-tots-bake/"
    );
});

describe("TasteOfHome", function () {
    describe("https://www.tasteofhome.com/recipes/quick-tater-tots-bake/", function () {
        it(`should be authored by "Taste of Home"`, function () {
            assert.equal(recipe.author, "Taste of Home");
        });

        it(`should be titled "Quick Tater Tots Bake"`, function () {
            assert.equal(recipe.title, "Quick Tater Tots Bake");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "3/4 to 1 pound ground beef or turkey",
                "1 small onion, chopped",
                "Salt and pepper to taste",
                "1 package (16 ounces) frozen Tater Tots",
                "1 can (10-3/4 ounces) condensed cream of mushroom soup, undiluted",
                "2/3 cup 2% milk or water",
                "1 cup shredded cheddar cheese"
            ]);
        });
    });
});
