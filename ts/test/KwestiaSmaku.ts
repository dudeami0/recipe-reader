import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("KwestiaSmaku", function () {
    describe("https://www.kwestiasmaku.com/przepis/pasztet-jajeczny", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.kwestiasmaku.com/przepis/pasztet-jajeczny"
            );
        });

        it(`should be authored by "kwestiasmaku"`, function () {
            assert.equal(recipe.author, "kwestiasmaku");
        });

        it(`should be titled "Pasztet jajeczny"`, function () {
            assert.equal(recipe.title, "Pasztet jajeczny");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "10 jajek ugotowanych na twardo",
                "2 jajka surowe",
                "2 cebule (np. cukrowe)",
                "2 łyżki oleju",
                "150 g mozzarelli żółtej (np. wiórki)",
                "150 g śmietany 12%",
                "2 łyżki majonezu",
                "2 łyżeczki musztardy miodowej",
                "1 szklanka panierki panko lub bułki tartej lub panieru z ciecierzycy",
                "1/2 łyżeczki kurkumy w proszku",
                "4 łyżki szczypiorku",
                "1 łyżka masła",
            ]);
        });
    });
});
