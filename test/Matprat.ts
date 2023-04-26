import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.matprat.no/oppskrifter/gjester/pulled-lamb-med-tilbehor/"
    );
});

describe("Matprat", function () {
    describe("https://www.matprat.no/oppskrifter/gjester/pulled-lamb-med-tilbehor/", function () {
        it(`should be authored by "MatPrat"`, function () {
            assert.equal(recipe.author, "MatPrat");
        });

        it(`should be titled "Pulled lamb med tilbehør"`, function () {
            assert.equal(recipe.title, "Pulled lamb med tilbehør");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 stk. lammelår",
                "1 stk. løk",
                "1 ss malt spisskummen",
                "1 ss malt koriander",
                "2 ts paprikapulver",
                "1 ts gurkemeie",
                "1 ts malt allehånde eller 0.5 ts nellik",
                "1 ts malt kanel",
                "1 ss hvitløkspulver",
                "0,5 ts kajennepepper",
                "2 ts salt",
                "0,5 ts pepper",
                "3 ss olivenolje",
                "2 ss rødvinseddik , eventuelt eplecidereddik",
                "4 ss gresk yoghurt",
                "1 glass tahini (á 160 g)",
                "1,5 dl vann",
                "saft av 0,5 stk. sitron",
                "2 båter revet hvitløk",
                "6 dl gresk yoghurt ,eller yoghurt naturell",
                "ca. 6 dl hvetemel",
                "1 ts salt (kan sløyfes)",
                "6 stk. plommetomat",
                "1 stk. agurk",
                "1 stk. løk",
                "1 pk cherrytomat (á 250 g)",
                "1 pk bladpersille",
                "2 ss olivenolje",
                "1 stk. granateple",
                "skall av 0,5 stk. sitron"
            ]);
        });
    });
});
