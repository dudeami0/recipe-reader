import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://kennymcgovern.com/salt-chilli-mozzarella-sticks"
    );
});

describe("KennyMcGovern", function () {
    describe("https://kennymcgovern.com/salt-chilli-mozzarella-sticks", function () {
        it(`should be authored by "Kenny McGovern"`, function () {
            assert.equal(recipe.author, "Kenny McGovern");
        });

        it(`should be titled "Salt & Chilli Mozzarella Sticks"`, function () {
            assert.equal(recipe.title, "Salt & Chilli Mozzarella Sticks");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 small onion sliced",
                "1/2 small carrot finely sliced",
                "2 spring onions sliced",
                "1 180g box frozen mozzarella sticks (12 sticks) I used Asda's own brand",
                "2 teaspoons sunflower oil",
                "1 teaspoon chopped garlic in oil",
                "1 teaspoon salt & pepper seasoning or to taste",
                "1/4 teaspoon dried crushed chilli flakes",
                "2 teaspoons rice wine"
            ]);
        });
    });
});
