import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://copykat.com/starbucks-salted-caramel-latte/");
});

describe("CopyKat", function () {
    describe("https://copykat.com/starbucks-salted-caramel-latte/", function () {
        it(`should be authored by "Stephanie Manley"`, function () {
            assert.equal(recipe.author, "Stephanie Manley");
        });

        it(`should be titled "Starbucks Salted Caramel Latte"`, function () {
            assert.equal(recipe.title, "Starbucks Salted Caramel Latte");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 teaspoon turbinado sugar",
                "¼ teaspoon sea salt flakes like Maldon",
                "4 ounces espresso or strong brewed coffee",
                "2½ tablespoons caramel syrup divided use",
                "4 ounces milk warmed and frothed",
                "2 tablespoons whipped cream"
            ]);
        });
    });
});
