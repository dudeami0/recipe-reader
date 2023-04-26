import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.southernliving.com/recipes/south-carolina-coconut-cream-pie"
    );
});

describe("SouthernLiving", function () {
    describe("https://www.southernliving.com/recipes/south-carolina-coconut-cream-pie", function () {
        it(`should be authored by "Southern Living Editors"`, function () {
            assert.equal(recipe.author, "Southern Living Editors");
        });

        it(`should be titled "South Carolina Coconut Cream Pie"`, function () {
            assert.equal(recipe.title, "South Carolina Coconut Cream Pie");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "3⁄4 cup granulated sugar",
                "2 1⁄2 tablespoons all-purpose flour",
                "1 1⁄2 cups milk",
                "3 egg yolks",
                "2 tablespoons butter, cut up",
                "1 cup sweetened flaked coconut",
                "1 teaspoon vanilla extract, divided",
                "1 (9-inch) baked piecrust shell",
                "1 cup whipping cream",
                "1⁄4 cup powdered sugar",
                "Garnish: toasted sweetened flaked coconut"
            ]);
        });
    });
});
