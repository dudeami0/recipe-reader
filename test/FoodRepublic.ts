import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.foodrepublic.com/recipes/vegan-sriracha-meatballs/"
    );
});

describe("FoodRepublic", function () {
    describe("https://www.foodrepublic.com/recipes/vegan-sriracha-meatballs/", function () {
        it(`should be authored by "Tiffany"`, function () {
            assert.equal(recipe.author, "Tiffany");
        });

        it(`should be titled "Veg Out: Vegan Sriracha Meatballs With Noodles"`, function () {
            assert.equal(
                recipe.title,
                "Veg Out: Vegan Sriracha Meatballs With Noodles"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "10 1/2 ounces rice noodles",
                "Vegetables (such as asparagus, bak choi, tenderstem broccoli, radishes, carrots, surgarsnap peas)",
                "Cucumber ribbons",
                "Mixed sesame seeds",
                "fresh cilantro"
            ]);
        });
    });
});
