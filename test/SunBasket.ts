import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://sunbasket.com/blog/chai-spice-cake-recipe/");
});

describe("SunBasket", function () {
    describe("https://sunbasket.com/blog/chai-spice-cake-recipe/", function () {
        it(`should be titled "Make This Easy Chai Spice Cake"`, function () {
            assert.equal(recipe.title, "Make This Easy Chai Spice Cake");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 cup unsalted butter, softened",
                "3 organic eggs",
                "½ vanilla bean, optional",
                "1 cup plus 2 tablespoons organic whole milk",
                "6 Darjeeling or Earl Grey tea bags",
                "2½ cups all-purpose flour",
                "2½ teaspoons baking powder",
                "1 teaspoon kosher salt, plus more to taste",
                "1⅓ cups plus 1 teaspoon organic cane sugar",
                "1 tablespoon fennel seeds",
                "¼ teaspoon freshly ground black pepper"
            ]);
        });
    });
});
