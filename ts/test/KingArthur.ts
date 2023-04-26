import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.kingarthurbaking.com/recipes/king-arthurs-carrot-cake-recipe"
    );
});

describe("KingArthur", function () {
    describe("https://www.kingarthurbaking.com/recipes/king-arthurs-carrot-cake-recipe", function () {
        it(`should be authored by "King Arthur Flour"`, function () {
            assert.equal(recipe.author, "King Arthur Flour");
        });

        it(`should be titled "King Arthur's Carrot Cake"`, function () {
            assert.equal(recipe.title, "King Arthur's Carrot Cake");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 1/4 cups (248g) vegetable oil",
                "2 cups (397g) granulated sugar",
                "1 teaspoon salt",
                "4 large eggs",
                "1 tablespoon (7g) cinnamon",
                "1/2 teaspoon ginger",
                "1/4 teaspoon cloves",
                "1 1/2 teaspoons baking powder",
                "1/2 teaspoon baking soda",
                "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
                "3 cups (326g) carrots finely grated",
                "1 1/2 cups (170g) chopped pecans or walnuts toasted for best flavor*",
                "8 tablespoons (113g) unsalted butter room temperature",
                "one 8-ounce package (227g) cream cheese room temperature",
                "1/4 teaspoon salt",
                "2 teaspoons vanilla extract or 1/2 teaspoon Fiori di Sicilia",
                "2 1/2 to 3 1/2 cups (283g to 397g) confectioners' sugar",
                "1 teaspoon milk or heavy cream optional if necessary to thin frosting"
            ]);
        });
    });
});
