import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.popsugar.com/food/jennifer-aniston-bulgur-salad-recipe-48760317"
    );
});

describe("PopSugar", function () {
    describe("https://www.popsugar.com/food/jennifer-aniston-bulgur-salad-recipe-48760317", function () {
        it(`should be authored by "Kalea Martin"`, function () {
            assert.equal(recipe.author, "Kalea Martin");
        });

        it(`should be titled "I Made Jennifer Aniston's Viral "Perfect Salad," and the Hype Is Real"`, function () {
            assert.equal(
                recipe.title,
                'I Made Jennifer Aniston\'s Viral "Perfect Salad," and the Hype Is Real'
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 cups bulgur wheat",
                "1 cup cucumber",
                "1/4 cup red onion",
                "1/2 cup parsley",
                "1/4 cup fresh mint",
                "1/2 cup feta",
                "15-oz. can garbanzo beans",
                "1/4 cup shelled pistachios"
            ]);
        });
    });
});
