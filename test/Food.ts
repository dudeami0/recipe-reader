import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.food.com/recipe/patti-labelles-macaroni-and-cheese-17186"
    );
});

describe("Food", function () {
    describe("https://www.food.com/recipe/patti-labelles-macaroni-and-cheese-17186", function () {
        it(`should be authored by "yooper"`, function () {
            assert.equal(recipe.author, "yooper");
        });

        it(`should be titled "Patti Labelle's Macaroni and Cheese"`, function () {
            assert.equal(recipe.title, "Patti Labelle's Macaroni and Cheese");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 tablespoon vegetable oil",
                "1 lb macaroni",
                "8 tablespoons butter",
                "1 tablespoon butter",
                "1⁄2 cup muenster cheese, shredded",
                "1⁄2 cup mild cheddar cheese, shredded",
                "1⁄2 cup sharp cheddar cheese, shredded",
                "1⁄2 cup monterey jack cheese, shredded",
                "2 cups half-and-half",
                "8 ounces Velveeta cheese, cubed",
                "2 eggs, lightly beaten",
                "1⁄4 teaspoon seasoning salt",
                "1⁄8 teaspoon fresh ground pepper"
            ]);
        });
    });
});
