import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.kuchnia-domowa.pl/przepisy/dania-glowne/595-krokiety-z-pieczarkami-jajkiem-zoltym-serem"
    );
});

describe("KuchniaDomowa", function () {
    describe("https://www.kuchnia-domowa.pl/przepisy/dania-glowne/595-krokiety-z-pieczarkami-jajkiem-zoltym-serem", function () {
        it(`should be titled "Krokiety z pieczarkami, jajkiem i żółtym serem"`, function () {
            assert.equal(
                recipe.title,
                "Krokiety z pieczarkami, jajkiem i żółtym serem"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "250 ml mleka",
                "250 ml gazowanej wody mineralnej*",
                "2 jajka",
                "225 g mąki pszennej",
                "½ łyżeczki soli",
                "400 g pieczarek",
                "1 cebula",
                "2 łyżki oleju np. rzepakowego",
                "4 jajka",
                "100- 150 g startego sera żółtego",
                "2 łyżki posiekanej natki pietruszki",
                "sól, pieprz",
                "2 jajka",
                "bułka tarta",
                "olej do smażenia"
            ]);
        });
    });
});
