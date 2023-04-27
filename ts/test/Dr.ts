import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("Dr", function () {
    describe("https://www.dr.dk/mad/opskrift/juleskum", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get("https://www.dr.dk/mad/opskrift/juleskum");
        });

        it(`should be authored by "Martin Wiese"`, function () {
            assert.equal(recipe.author, "Martin Wiese");
        });

        it(`should be titled "Juleskum"`, function () {
            assert.equal(recipe.title, "Juleskum");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "7 blade husblas",
                "260 g sukker",
                "120 g glukosesirup",
                "80 g vand",
                "140 g æggehvider",
                "20 g sukker",
                "2 spsk. frysetørrede jordbær",
                "1 tsk. lyserød farve",
                "1 tsk. vaniljepasta",
                "Flormelis efter behov",
            ]);
        });
    });
});
