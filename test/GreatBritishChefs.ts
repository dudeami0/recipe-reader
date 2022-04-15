import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.greatbritishchefs.com/recipes/beef-battuta-recipe"
    );
});

describe("GreatBritishChefs", function () {
    describe("https://www.greatbritishchefs.com/recipes/beef-battuta-recipe", function () {
        it(`should be authored by "Francesco Mazzei"`, function () {
            assert.equal(recipe.author, "Francesco Mazzei");
        });

        it(`should be titled "Beef battuta"`, function () {
            assert.equal(recipe.title, "Beef battuta");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "300g of beef rump",
                "5g of grape must",
                "12 chicory leaves, red",
                "12 baby gem lettuce leaves",
                "8 anchovy fillets",
                "10ml of mosto cotto",
                "sea salt",
                "freshly ground black pepper",
                "extra virgin olive oil",
                "150ml of extra virgin olive oil",
                "100g of parsley, basil and chives, mixed together",
                "50g of mushrooms, pickled",
                "10g of white truffle, shaved (optional)",
                "chervil, to garnish"
            ]);
        });
    });
});
