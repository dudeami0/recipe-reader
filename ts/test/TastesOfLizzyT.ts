import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("TastesOfLizzyT", function () {
    describe("https://www.tastesoflizzyt.com/almond-joy-layer-cake/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.tastesoflizzyt.com/almond-joy-layer-cake/"
            );
        });

        it(`should be authored by "Lizzy T"`, function () {
            assert.equal(recipe.author, "Lizzy T");
        });

        it(`should be titled "Almond Joy Layer Cake"`, function () {
            assert.equal(recipe.title, "Almond Joy Layer Cake");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 box Duncan Hines Dark Chocolate Fudge dry cake mix 16.5 ounces",
                "3 large eggs",
                "1 cup whole milk",
                "1/3 cup canola oil",
                "2 cups butter 4 sticks, softened",
                "3 teaspoons coconut extract",
                "8 cups powdered sugar",
                "1/3-1/2 cup heavy cream",
                "2 cups shredded coconut",
                "2 cups semi-sweet chocolate chips",
                "1 cup heavy cream",
                "1/2 cup sliced almonds",
                "Almond Joy fun-size candy bar for garnishing",
            ]);
        });
    });
});
