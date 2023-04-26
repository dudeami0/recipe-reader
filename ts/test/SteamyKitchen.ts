import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://steamykitchen.com/55394-roasted-pumpkin-seeds-recipe.html"
    );
});

describe("SteamyKitchen", function () {
    describe("https://steamykitchen.com/55394-roasted-pumpkin-seeds-recipe.html", function () {
        it(`should be authored by "steamykitchen"`, function () {
            assert.equal(recipe.author, "steamykitchen");
        });

        it(`should be titled "Roasted Pumpkin Seeds Recipe"`, function () {
            assert.equal(recipe.title, "Roasted Pumpkin Seeds Recipe");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 cup dry untoasted pumpkin seeds (hulled)",
                "2 teaspoons olive oil (plus more for baking sheet)",
                "1 to 2 teaspoons spice blend of your choice",
                "Sea salt to taste"
            ]);
        });
    });
});
