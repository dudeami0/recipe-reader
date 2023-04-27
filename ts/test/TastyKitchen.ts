import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("TastyKitchen", function () {
    describe("https://tastykitchen.com/recipes/main-courses/creamy-garlic-shrimp-with-parmesan/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://tastykitchen.com/recipes/main-courses/creamy-garlic-shrimp-with-parmesan/"
            );
        });

        it(`should be authored by "Blondelish.com"`, function () {
            assert.equal(recipe.author, "Blondelish.com");
        });

        it(`should be titled "Creamy Garlic Shrimp with Parmesan"`, function () {
            assert.equal(recipe.title, "Creamy Garlic Shrimp with Parmesan");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 Tablespoons Oil From Jarred Sun-dried Tomatoes",
                "1-½ pound Raw Jumbo Shrimp, Peeled, Deveined With Tails On",
                "½ Yellow Onion, Finely Chopped",
                "2 pieces Large Garlic Cloves, Minced",
                "2 ounces, weight Oil-Packed Sun-dried Tomatoes, Drained And Chopped Small",
                "½ cups Low-sodium Fish Or Vegetable Stock",
                "1-½ cup Heavy Cream",
                "½ teaspoons Smoked Paprika",
                "½ teaspoons Crushed Chili Flakes, Or To Taste",
                "1 cup Fresh Grated Parmesan",
                "Ground Black Pepper To Taste",
                "Sea Salt, to taste",
                "1 cup Packed Fresh Basil Leaves, Plus More For Garnish",
            ]);
        });
    });
});
