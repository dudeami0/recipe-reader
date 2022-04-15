import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.bbc.co.uk/food/recipes/easter_brownies_39845"
    );
});

describe("BBCFood", function () {
    describe("https://www.bbc.co.uk/food/recipes/easter_brownies_39845", function () {
        it(`should be authored by "By Benjamina Ebuehi"`, function () {
            assert.equal(recipe.author, "By Benjamina Ebuehi");
        });

        it(`should be titled "Easter egg brownies"`, function () {
            assert.equal(recipe.title, "Easter egg brownies");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "5 creme eggs",
                "175g/6oz dark chocolate, broken into small pieces",
                "175g/6oz unsalted butter, plus extra for greasing",
                "2 tbsp cocoa powder",
                "3 large free-range eggs",
                "150g/5½oz caster sugar",
                "150g/5½oz light brown sugar",
                "1 tsp vanilla bean paste",
                "115g/4oz plain flour",
                "½ tsp fine sea salt",
                "150g/5½oz shortbread biscuits, roughly chopped (optional)"
            ]);
        });
    });
});
