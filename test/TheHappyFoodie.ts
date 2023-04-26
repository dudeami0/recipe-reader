import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://thehappyfoodie.co.uk/recipes/garlic-mushroom-tagliatelle/"
    );
});

describe("TheHappyFoodie", function () {
    describe("https://thehappyfoodie.co.uk/recipes/garlic-mushroom-tagliatelle/", function () {
        it(`should be authored by "Chris Baber"`, function () {
            assert.equal(recipe.author, "Chris Baber");
        });

        it(`should be titled "Chris Baber’s Creamy Garlic Mushroom Tagliatelle"`, function () {
            assert.equal(
                recipe.title,
                "Chris Baber’s Creamy Garlic Mushroom Tagliatelle"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "6 tbsp pine nuts",
                "1 tbsp olive oil",
                "2 tbsp butter",
                "800g chestnut mushrooms, sliced",
                "6 garlic cloves, finely chopped",
                "6 sprigs of thyme",
                "250ml vegetable or chicken stock",
                "600g fresh tagliatelle",
                "6 tbsp crème fraîche",
                "75g Parmesan cheese, grated",
                "Salt and pepper"
            ]);
        });
    });
});
