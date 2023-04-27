import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("Joyfoodsunshine", function () {
    describe("https://joyfoodsunshine.com/lemon-orzo-salad/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get("https://joyfoodsunshine.com/lemon-orzo-salad/");
        });

        it(`should be authored by "Laura"`, function () {
            assert.equal(recipe.author, "Laura");
        });

        it(`should be titled "Lemon Orzo Salad Recipe"`, function () {
            assert.equal(recipe.title, "Lemon Orzo Salad Recipe");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "▢ 2 cups orzo dry",
                "▢ 5 quarts water + 1 TBS salt (for cooking the orzo)",
                "▢ 1 cucumber peeled and diced",
                "▢ ½ cup onion finely diced",
                "▢ 1 pint baby tomatoes halved",
                "▢ 1 bell pepper diced (red, yellow, green, orange",
                "▢ Fresh basil chopped",
                "▢ ½ cup parmesan cheese",
                "▢ 1 avocado diced",
                "▢ ½ cup olive oil",
                "▢ 6 TBS lemon juice",
                "▢ 2 tsp honey",
                "▢ 2 tsp Dijon mustard",
                "▢ 1 TBS minced garlic",
                "▢ Salt",
                "▢ Pepper or lemon pepper",
                "▢ ½ cup pine nuts toasted",
                "▢ Extra parmesan cheese",
            ]);
        });
    });
});
