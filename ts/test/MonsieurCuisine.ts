import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.monsieur-cuisine.com/de/rezepte/detail/kraeutersalz-1/"
    );
});

describe("MonsieurCuisine", function () {
    describe("https://www.monsieur-cuisine.com/de/rezepte/detail/kraeutersalz-1/", function () {
        it(`should be authored by "Rezept von: Anonym"`, function () {
            assert.equal(recipe.author, "Rezept von: Anonym");
        });

        it(`should be titled "Kräutersalz"`, function () {
            assert.equal(recipe.title, "Kräutersalz");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "300 g grobes Meersalz",
                "1 TL Knoblauchpulver",
                "1 TL Dille",
                "4-5 Stück Loorbeerblätter",
                "2 EL Röstzwiebel",
                "2 EL Thymian",
                "2 EL Rosmarin",
                "1 EL Oregano",
                "1 EL Majoran",
                "ev. 1 EL italienische Kräuter"
            ]);
        });
    });
});
