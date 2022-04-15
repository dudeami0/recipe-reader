import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.finedininglovers.com/recipes/main-course/lamb-kebabs-tabbouleh"
    );
});

describe("FineDiningLovers", function () {
    describe("https://www.finedininglovers.com/recipes/main-course/lamb-kebabs-tabbouleh", function () {
        it(`should be titled "Lamb Kebabs on Tabbouleh"`, function () {
            assert.equal(recipe.title, "Lamb Kebabs on Tabbouleh");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "Bulgur 200 g",
                "Vegetable Stock 300 ml",
                "Tomatoes 250 g",
                "Pepper 1 each",
                "Chili Pepper 2 each",
                "Onion 1 each",
                "Zucchini 1 each",
                "Parsley 2 tbsp",
                "Lemon Juice 4 tbsp",
                "Olive oil 4 tbsp",
                "Salt",
                "Pepper",
                "Lamb 600 g",
                "Olive oil 3 tbsp",
                "Red Wine Vinegar 3 tbsp",
                "Lemon Juice 2 tbsp",
                "Mustard 1 tbsp",
                "Salt",
                "Pepper",
                "Skewers wooden"
            ]);
        });
    });
});
