import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://rachlmansfield.com/easy-gluten-free-strawberry-cookies/"
    );
});

describe("RachlMansfield", function () {
    describe("https://rachlmansfield.com/easy-gluten-free-strawberry-cookies/", function () {
        it(`should be authored by "Rachel"`, function () {
            assert.equal(recipe.author, "Rachel");
        });

        it(`should be titled "Easy Gluten-free Strawberry Cookies"`, function () {
            assert.equal(recipe.title, "Easy Gluten-free Strawberry Cookies");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 egg",
                "1/2 cup + 2 tablespoons coconut sugar",
                "Juice from 1 /2 lemon",
                "1/2 cup avocado oil",
                "1/2 teaspoon vanilla extract",
                "1 3/4 cup gluten-free oat flour",
                "1 1/2 teaspoon baking powder",
                "3/4 cup chopped strawberries"
            ]);
        });
    });
});
