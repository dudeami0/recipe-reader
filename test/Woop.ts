import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://woop.co.nz/creamy-chorizo-fettuccine-347-2-f.html"
    );
});

describe("Woop", function () {
    describe("https://woop.co.nz/creamy-chorizo-fettuccine-347-2-f.html", function () {
        it(`should be titled "Creamy chorizo fettuccine"`, function () {
            assert.equal(recipe.title, "Creamy chorizo fettuccine");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 pack of chorizo grind",
                "1 pack of fresh fettucine",
                "1 pot of creamy capsicum sauce",
                "1 pot of rosemary oil",
                "1 pot of shaved Parmesan",
                "1 bag of rocket",
                "1 pot of peas",
                "Cauliflower"
            ]);
        });
    });
});
