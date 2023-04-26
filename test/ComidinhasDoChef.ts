import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://comidinhasdochef.com/bolo-de-mandioca-assado/");
});

describe("ComidinhasDoChef", function () {
    describe("https://comidinhasdochef.com/bolo-de-mandioca-assado/", function () {
        it(`should be authored by "Pedro Cavalcanti"`, function () {
            assert.equal(recipe.author, "Pedro Cavalcanti");
        });

        it(`should be titled "Bolo de Mandioca Assado"`, function () {
            assert.equal(recipe.title, "Bolo de Mandioca Assado");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 kg de mandioca",
                "2 e 1/2 xícaras (chá) de açúcar",
                "100 g de coco em flocos",
                "200 ml de leite de coco",
                "4 unidades de ovos",
                "3 colheres (sopa) de manteiga",
                "1 xícara (chá) de leite",
                "1 pitada de sal",
                "1 colher (sopa) de fermento químico em pó para bolos"
            ]);
        });
    });
});
