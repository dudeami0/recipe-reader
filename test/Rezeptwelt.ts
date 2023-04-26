import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.rezeptwelt.de/brot-broetchen-rezepte/schwarzbrot-von-oma-liesel/hxm24e06-7d771-820916-cfcd2-4wanv7is"
    );
});

describe("Rezeptwelt", function () {
    describe("https://www.rezeptwelt.de/brot-broetchen-rezepte/schwarzbrot-von-oma-liesel/hxm24e06-7d771-820916-cfcd2-4wanv7is", function () {
        it(`should be authored by "banjole"`, function () {
            assert.equal(recipe.author, "banjole");
        });

        it(`should be titled "Schwarzbrot von Oma Liesel"`, function () {
            assert.equal(recipe.title, "Schwarzbrot von Oma Liesel");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "100 g Weizenmehl, (1050)",
                "1/2 Hefe",
                "100 g Wasser",
                "750 g Weizenmehl, (1050)",
                "2 TL Salz",
                "1 TL Brotgewürz",
                "490 g Wasser",
                "150 g Körnermix",
                "(Sesam, Leinsamen, Sonnenblumen)"
            ]);
        });
    });
});
