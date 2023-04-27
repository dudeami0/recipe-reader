import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("Panelinha", function () {
    describe("https://www.panelinha.com.br/receita/farofa-de-amendoim-com-gengibre", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.panelinha.com.br/receita/farofa-de-amendoim-com-gengibre"
            );
        });

        it(`should be authored by "Panelinha"`, function () {
            assert.equal(recipe.author, "Panelinha");
        });

        it(`should be titled "Farofa de amendoim com gengibre"`, function () {
            assert.equal(recipe.title, "Farofa de amendoim com gengibre");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 xícaras (chá) de farinha de mandioca flocada (tipo biju)",
                "½ xícara (chá) de amendoim torrado sem sal (cerca de 70 g)",
                "1 colher (chá) de gengibre ralado",
                "100 g de manteiga",
                "sal a gosto",
            ]);
        });

        it(`should have the correct instructions`, function () {
            assert.deepEqual(recipe.instructions, [
                "Numa tábua, pique grosseiramente metade dos amendoins, e pique fino a outra metade — o amendoim picado grosso deixa a farofa mais crocante, e o fino dá mais sabor ao preparo. Corte a manteiga em pedaços para derreter mais rápido na frigideira.",
                "Leve uma frigideira grande com a manteiga ao fogo médio. Quando derreter, adicione os amendoins picados e mexa por cerca de 2 minutos, até perfumar e dourar levemente. Abaixe o fogo, junte o gengibre, tempere com sal e mexa por 1 minuto.",
                "Adicione a farinha de mandioca aos poucos, mexendo bem para incorporar os sabores da manteiga com o amendoim e o gengibre. Deixe a farofa tostar por mais 3 minutos, mexendo de vez em quando, até ficar crocante. Sirva a seguir.",
            ]);
        });
    });
});
