import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://sundpaabudget.dk/flexitarisk-madplan-uge-15-2022/"
    );
});

describe("SundPaaBudget", function () {
    describe("https://sundpaabudget.dk/flexitarisk-madplan-uge-15-2022/", function () {
        it(`should be authored by "Britt // Sund på budget"`, function () {
            assert.equal(recipe.author, "Britt // Sund på budget");
        });

        it(`should be titled "Indkøbsliste (Rema 1000)"`, function () {
            assert.equal(recipe.title, "Indkøbsliste (Rema 1000)");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 pk rugbrød, schuldstad (9 kr (tilbud))",
                "2 agurk (2 x 8,50 kr = 17 kr)",
                "1 aubergine (9 kr)",
                "1 broccoli (13 kr)",
                "1 kg gulerødder (8 kr)",
                "1 iceberg (8 kr)",
                "1 kg kartofler (7,5 kr)",
                "2 peberfrugter (2 x 7,50 kr = 15 kr)",
                "1 ps røde snackpeber, 500 g (18 kr)",
                "1 spidskål (13 kr)",
                "1 squash (7,50 kr)",
                "2 tomater, vej-selv (5 kr)",
                "1 ps øko. citroner, 250 g (5 kr (tilbud))",
                "1 ps blomkålsris, øko 350 g (12,95 kr)",
                "1 ps hotwings, 750 g (25 kr (tilbud))",
                "1 pk kyllingelårfilet, 400 g (20 kr (tilbud))",
                "1 cheasy fraiche 5%, 500 ml (14,50 kr)",
                "2 ps cheasy mozzarella 13 %, 150 g (2 x 12,95 kr = 26 kr)",
                "1 græsk feta (i blok), 200 g (19,95 kr)",
                "1 liter minimælk (10,50 kr)",
                "2 oma madlavningsfløde 4%, 250 mL (2 x 7,95 kr = 16 kr)",
                "1 pk philadelphia med løg og urter (10 kr (tilbud))",
                "2 ps fuldkornspasta, 500 g (2 x 8,50 kr = 17,50 kr)",
                "5 ds hakkede tomater (4 x 4,95 kr = 25 kr)",
                "1 ds majs (5,25 kr)",
                "1 ps parboiled ris, 1 kg (7,95 kr)",
                "1 ps røde linser, tørrede 400 g (14,95 kr)",
                "2 ds tomatpure, 140 g (2 x 2,50 kr = 5 kr)",
                "2 ds torskerogn, Nexø 200 g (2 x 5 kr = 10 kr (tilbud))"
            ]);
        });
    });
});
