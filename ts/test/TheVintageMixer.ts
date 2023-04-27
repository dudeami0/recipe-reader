import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("TheVintageMixer", function () {
    describe("https://www.thevintagemixer.com/martha-stewarts-christmas-cut-out-cookies/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.thevintagemixer.com/martha-stewarts-christmas-cut-out-cookies/"
            );
        });

        it(`should be authored by "Becky"`, function () {
            assert.equal(recipe.author, "Becky");
        });

        it(`should be titled "Christmas Cut-Out Sugar Cookies"`, function () {
            assert.equal(recipe.title, "Christmas Cut-Out Sugar Cookies");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 cups of all purpose flour",
                "1/4 teaspoon salt",
                "1/2 teaspoon baking powder",
                "1/4 lb. butter, (softened (1 stick))",
                "1 cup sugar",
                "1 large egg, (lightly beaten)",
                "2 tablespoon of brandy, (or apple juice)",
                "1/2 teaspoon vanilla extract, (or maple syrup)",
                "3 cups confectioners' sugar*",
                "2 egg whites",
                "5-6 drops of freshly squeezed lemon juice",
                "Food Coloring",
            ]);
        });
    });
});
