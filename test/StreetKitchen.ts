import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://streetkitchen.hu/fantasztikus-desszertek/husveti-citromos-keksz/"
    );
});

describe("StreetKitchen", function () {
    describe("https://streetkitchen.hu/fantasztikus-desszertek/husveti-citromos-keksz/", function () {
        it(`should be authored by "Szilágyi Nóri"`, function () {
            assert.equal(recipe.author, "Szilágyi Nóri");
        });

        it(`should be titled "Citromos keksz"`, function () {
            assert.equal(recipe.title, "Citromos keksz");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "300 g liszt",
                "200 g vaj",
                "100 g porcukor",
                "1 csipet só",
                "1 db tojássárgája",
                "1 - 2 ek tejföl",
                "1 db citrom reszelt héja",
                "½ csomag sütőpor",
                "4 db tojássárgája",
                "120 g cukor",
                "1 ek étkezési keményítő",
                "1 db citrom reszelt héja",
                "80 ml citromlé",
                "1 csipet só",
                "100 g vaj",
                "porcukor",
                "300 g liszt",
                "200 g vaj",
                "100 g porcukor",
                "1 csipet só",
                "1 db tojássárgája",
                "1 - 2 ek tejföl",
                "1 db citrom reszelt héja",
                "½ csomag sütőpor",
                "4 db tojássárgája",
                "120 g cukor",
                "1 ek étkezési keményítő",
                "1 db citrom reszelt héja",
                "80 ml citromlé",
                "1 csipet só",
                "100 g vaj",
                "porcukor"
            ]);
        });
    });
});
