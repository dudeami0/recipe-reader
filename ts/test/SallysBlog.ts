import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("SallysBlog", function () {
    describe("https://sallys-blog.de/blog/detail/sCategory/248/blogArticle/1867", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://sallys-blog.de/blog/detail/sCategory/248/blogArticle/1867"
            );
        });

        it(`should be titled "Capri-Sun Cupcakes"`, function () {
            assert.equal(recipe.title, "Capri-Sun Cupcakes");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 Eier",
                "250 g Sahne",
                "50 g Mineralwasser",
                "1 TL Zitrone (Abrieb)",
                "1 TL Zitrone (Saft)",
                "1 TL Vanilleextrakt",
                "150 g Zucker",
                "1 Pr. Salz",
                "200 g Mehl",
                "0,5 TL Backpulver",
                "0,25 TL Natron",
                "50 g Mandeln (gehackt)",
                "150 g Himbeeren (frisch oder TK)",
                "50 g Capri-Sun Sirup (Kirsche)",
                "250 g Frischkäse (Doppelrahmstufe)",
                "100 g Capri-Sun Sirup (Multifrucht)",
                "200 g Sahne",
                "5,5 TL San-apart",
                "250 g Frischkäse (Doppelrahmstufe)",
                "100 g Capri-Sun Sirup (Kirsche)",
                "200 g Sahne",
                "5,5 TL San-apart",
                "1 EL Amaranth (gepufft)",
                "24 Pastell Oblatenblumen",
            ]);
        });
    });
});
