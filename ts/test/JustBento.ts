import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://justbento.com/handbook/johbisai/char-siu-yakibuta-chinese-style-roast-pork"
    );
});

describe("JustBento", function () {
    describe("https://justbento.com/handbook/johbisai/char-siu-yakibuta-chinese-style-roast-pork", function () {
        it(`should be titled "Char siu or yakibuta - Chinese style roast pork"`, function () {
            assert.equal(
                recipe.title,
                "Char siu or yakibuta - Chinese style roast pork"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 cup (360ml) soy sauce",
                "3 Tbs. oyster sauce",
                "5 Tbs. sugar",
                "1/2 cup shaoxing wine (紹興酒）or sake or dry sherry",
                "an inch-long (2cm) piece of fresh ginger, peeled and sliced",
                "1 small onion, peeled and cut into quarters",
                "2 garlic cloves, peeled and crushed with a knife",
                "1 cinnamon stick",
                "1 small piece of star anise",
                "1 clove"
            ]);
        });
    });
});
