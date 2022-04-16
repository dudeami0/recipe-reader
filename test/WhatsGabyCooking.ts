import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://whatsgabycooking.com/cheesy-asparagus-tart/");
});

describe("WhatsGabyCooking", function () {
    describe("https://whatsgabycooking.com/cheesy-asparagus-tart/", function () {
        it(`should be authored by "Gaby"`, function () {
            assert.equal(recipe.author, "Gaby");
        });

        it(`should be titled "Cheesy Asparagus Tart"`, function () {
            assert.equal(recipe.title, "Cheesy Asparagus Tart");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 sheet store bought Puff Pastry",
                "1/2 cup shredded Gruyere",
                "1/4 cup shredded Parmesan cheese",
                "1 bunch skinny asparagus",
                "1 tbsp olive oil",
                "Kosher salt and freshly cracked black pepper",
                "Pea shoots or micro greens to garnish",
                "1 lemon, juiced and zested"
            ]);
        });
    });
});
