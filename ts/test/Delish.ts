import { assert } from "chai";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.delish.com/cooking/recipe-ideas/a39211247/crunch-salad-recipe/"
    );
});

describe("Delish", function () {
    describe("https://www.delish.com/cooking/recipe-ideas/a39211247/crunch-salad-recipe/", function () {
        it(`should be authored by "Justin Sullivan"`, function () {
            assert.equal(recipe.author, "Justin Sullivan");
        });

        it(`should be titled "Crunch Salad"`, function () {
            assert.equal(recipe.title, "Crunch Salad");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 large bunch cilantro, roughly chopped",
                "1 garlic clove, peeled",
                "1/4 c. lime juice",
                "1/2 tsp. honey",
                "1/2 c. extra-virgin olive oil",
                "Pinch of cumin, optional",
                "Kosher salt",
                "Freshly ground black pepper",
                "1 (10 to 12-oz.) bunch lacinato kale, chopped or torn into small pieces",
                "1/4 small green cabbage, chopped",
                "1 granny smith apple, diced, about ¼”",
                "3 Persian or kirby cucumbers, diced, about ¼”",
                "2 stalks celery, diced, about ¼”",
                "3 scallions, thinly sliced",
                "1/3 c. cup roasted and unsalted peanuts, roughly chopped",
                "1/3 c. cup roasted and unsalted seeds (such as sunflower or pumpkin)",
                "3 oz. feta cheese, crumbled",
                "Kosher Salt"
            ]);
        });
    });
});
