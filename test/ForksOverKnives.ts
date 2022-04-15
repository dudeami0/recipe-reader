import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.forksoverknives.com/recipes/amazing-grains/oil-free-farro-fried-rice/"
    );
});

describe("ForksOverKnives", function () {
    describe("https://www.forksoverknives.com/recipes/amazing-grains/oil-free-farro-fried-rice/", function () {
        it(`should be authored by "Nancy Macklin"`, function () {
            assert.equal(recipe.author, "Nancy Macklin");
        });

        it(`should be titled "Oil-Free Farro Fried Rice"`, function () {
            assert.equal(recipe.title, "Oil-Free Farro Fried Rice");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "12- to 16-oz. package frozen stir-fry vegetables",
                "3 cloves garlic, minced",
                "2 tablespoons reduced-sodium soy sauce or tamari",
                "1 tablespoon lime juice",
                "2 teaspoon grated fresh ginger",
                "1 teaspoon pure maple syrup",
                "¼ teaspoon red pepper flakes (optional)",
                "⅛ teaspoon ground white pepper",
                "4 cups cooked farro",
                "3 cups thinly sliced kale, stems removed",
                "¼ cup sliced scallions",
                "2 tablespoons sesame seeds, toasted"
            ]);
        });
    });
});
