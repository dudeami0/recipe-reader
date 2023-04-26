import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.cucchiaio.it/ricetta/danubio-salato-allo-yogurt/"
    );
});

describe("Cucchiaio", function () {
    describe("https://www.cucchiaio.it/ricetta/danubio-salato-allo-yogurt/", function () {
        it(`should be authored by "Il Cucchiaio d'Argento"`, function () {
            assert.equal(recipe.author, "Il Cucchiaio d'Argento");
        });

        it(`should be titled "Danubio salato allo yogurt"`, function () {
            assert.equal(recipe.title, "Danubio salato allo yogurt");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "350 g di farina manitoba",
                "150 g di farina 0",
                "200 ml di latte",
                "80 g di yogurt intero al naturale",
                "1 cucchiaino di sale",
                "½ cucchiaino di zucchero semolato",
                "7 g di lievito di birra disidratato",
                "2 uova a temperatura ambiente",
                "200 g di salame a dadini",
                "200 g di provola a dadini",
                "1 tuorlo",
                "1 cucchiaio di latte",
                "semi di chia"
            ]);
        });
    });
});
