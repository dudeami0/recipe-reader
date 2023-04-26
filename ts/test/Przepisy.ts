import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.przepisy.pl/przepis/ciasto-mleczna-kanapka-milky-way"
    );
});

describe("Przepisy", function () {
    describe("https://www.przepisy.pl/przepis/ciasto-mleczna-kanapka-milky-way", function () {
        it(`should be authored by "przepisy.pl"`, function () {
            assert.equal(recipe.author, "przepisy.pl");
        });

        it(`should be titled "Ciasto mleczna kanapka (Milky Way)"`, function () {
            assert.equal(recipe.title, "Ciasto mleczna kanapka (Milky Way)");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "śmietana 36% UHT",
                "220 gramów",
                "batony Milky Way",
                "120 gramów",
                "czekolada mleczna",
                "150 gramów",
                "żelatyna w listkach",
                "1 sztuka",
                "czekolada gorzka",
                "70 gramów",
                "masło",
                "60 gramów",
                "jaja",
                "2 sztuki",
                "cukier",
                "150 gramów",
                "mąka pszenna",
                "40 gramów",
                "mąka migdałowa",
                "30 gramów"
            ]);
        });
    });
});
