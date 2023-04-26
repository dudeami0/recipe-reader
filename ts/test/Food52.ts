import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://food52.com/recipes/87174-vegan-matzo-ball-soup-recipe"
    );
});

describe("Food52", function () {
    describe("https://food52.com/recipes/87174-vegan-matzo-ball-soup-recipe", function () {
        it(`should be authored by "Rebecca Firkser"`, function () {
            assert.equal(recipe.author, "Rebecca Firkser");
        });

        it(`should be titled "Vegan Matzo Ball Soup"`, function () {
            assert.equal(recipe.title, "Vegan Matzo Ball Soup");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "8 celery stalks",
                "5 medium carrots",
                "2 medium parsnips",
                "1/4 cup extra-virgin olive oil",
                "2 heads garlic, unpeeled, halved crosswise",
                "2 medium yellow onions, unpeeled, halved through the root end",
                "2 tablespoons whole black peppercorns, plus more freshly ground",
                "1 bunch parsley",
                "Kosher salt",
                "1 (15.5-ounce) can chickpeas, drained and aquafaba reserved (optional)",
                "Freshly chopped dill, for serving",
                "1 cup matzo meal (not matzo ball mix)",
                "1/2 cup chickpea flour",
                "1 1/2 teaspoons kosher salt",
                "1 teaspoon freshly ground black pepper",
                "2 teaspoons baking powder",
                "3/4 cup aquafaba, drained from a 15.5-ounce can of chickpeas",
                "1/4 cup extra-virgin olive oil",
                "1/4 cup finely chopped dill, parsley, or a mixture of both",
                "2 garlic cloves, grated"
            ]);
        });
    });
});
