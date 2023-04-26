import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://paninihappy.com/turkey-bacon-lattice-and-havarti-panini/"
    );
});

describe("PaniniHappy", function () {
    describe("https://paninihappy.com/turkey-bacon-lattice-and-havarti-panini/", function () {
        it(`should be authored by "Recipe by Kathy Strahs, PaniniHappy.com"`, function () {
            assert.equal(
                recipe.author,
                "Recipe by Kathy Strahs, PaniniHappy.com"
            );
        });

        it(`should be titled "Turkey, Bacon Lattice and Havarti Panini"`, function () {
            assert.equal(
                recipe.title,
                "Turkey, Bacon Lattice and Havarti Panini"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "8 slices bacon",
                "4 tablespoons butter, at room temperature",
                "8 slices levain or other rustic bread, sliced from a dense bakery loaf",
                "4 tablespoons Green goddess dressing or mayonnaise",
                "8 ounces turkey breast, sliced",
                "2 plum tomatoes (such as Roma), thinly sliced and seeded",
                "4 slices havarti cheese"
            ]);
        });
    });
});
