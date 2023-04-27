import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("MotherThyme", function () {
    describe("https://www.motherthyme.com/2022/03/5-ingredient-cake-mix-carrot-cake-cookies.html", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.motherthyme.com/2022/03/5-ingredient-cake-mix-carrot-cake-cookies.html"
            );
        });

        it(`should be authored by "Jenn (Mother Thyme)"`, function () {
            assert.equal(recipe.author, "Jenn (Mother Thyme)");
        });

        it(`should be titled "5 Ingredient Cake Mix Carrot Cake Cookies"`, function () {
            assert.equal(
                recipe.title,
                "5 Ingredient Cake Mix Carrot Cake Cookies"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 box of carrot cake mix",
                "1/2 cup vegetable oil",
                "2 large eggs",
                "1 container of cream cheese frosting",
                "1/2 cup chopped walnuts",
            ]);
        });
    });
});
