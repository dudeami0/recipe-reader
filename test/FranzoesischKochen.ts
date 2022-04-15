import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.franzoesischkochen.de/osterei-kuchen-mit-ueberraschung/"
    );
});

describe("FranzoesischKochen", function () {
    describe("https://www.franzoesischkochen.de/osterei-kuchen-mit-ueberraschung/", function () {
        it(`should be authored by "Aurélie Bastian"`, function () {
            assert.equal(recipe.author, "Aurélie Bastian");
        });

        it(`should be titled "Osterei-Kuchen mit Überraschung"`, function () {
            assert.equal(recipe.title, "Osterei-Kuchen mit Überraschung");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 Eier (L)",
                "120g Mehl",
                "1TL Backpulver",
                "100g Zucker",
                "80 g gemahlene Mandeln",
                "30g geschmolzene Butter",
                "1/2 TL Vanilleextrakt",
                "30-40 ml Milch. (Butter und Mehl für die Tassen)"
            ]);
        });
    });
});
