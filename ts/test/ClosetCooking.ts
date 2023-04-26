import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://www.closetcooking.com/lemon-butter-tarts/");
});

describe("ClosetCooking", function () {
    describe("https://www.closetcooking.com/lemon-butter-tarts/", function () {
        it(`should be titled "Lemon Butter Tarts"`, function () {
            assert.equal(recipe.title, "Lemon Butter Tarts");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 pie crust pastry, chilled",
                "1/3 cup lemon juice",
                "zest of 1 lemon",
                "2/3 cup granulated sugar",
                "1 large egg",
                "1 large egg yolk",
                "1/4 cup unsalted butter, melted and cooled",
                "pinch of salt"
            ]);
        });
    });
});
