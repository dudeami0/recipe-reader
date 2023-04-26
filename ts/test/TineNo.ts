import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.tine.no/oppskrifter/middag-og-hovedretter/fisk-og-skalldyr/sesambakt-fiskefilet-med-sweet-chili-raita"
    );
});

describe("TineNo", function () {
    describe("https://www.tine.no/oppskrifter/middag-og-hovedretter/fisk-og-skalldyr/sesambakt-fiskefilet-med-sweet-chili-raita", function () {
        it(`should be authored by "TINE"`, function () {
            assert.equal(recipe.author, "TINE");
        });

        it(`should be titled "Sesambakt fiskefilet med sweet chili-raita"`, function () {
            assert.equal(
                recipe.title,
                "Sesambakt fiskefilet med sweet chili-raita"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "700 g seifilet eller annen fisk",
                "2 dl hvetemel",
                "1 ts salt",
                "2 stk egg",
                "1 ss vann",
                "1.5 dl sesamfrø",
                "2 ss TINE® Meierismør , til steking",
                "3 dl TINE Yoghurt Naturell 3% fett , Crème Fraîche eller Kesam",
                "3 ss Sweet Chili saus",
                "3 dl ris , ukokt",
                "1 stk rød paprika",
                "4 stk vårløk",
                "1 stk rødløk",
                "1 ss TINE® Meierismør"
            ]);
        });
    });
});
