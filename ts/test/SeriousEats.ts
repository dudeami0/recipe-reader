import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.seriouseats.com/harissa-armenian-wheat-and-chicken-porridge-recipe-5224855"
    );
});

describe("SeriousEats", function () {
    describe("https://www.seriouseats.com/harissa-armenian-wheat-and-chicken-porridge-recipe-5224855", function () {
        it(`should be authored by "Andrew Janjigian"`, function () {
            assert.equal(recipe.author, "Andrew Janjigian");
        });

        it(`should be titled "Harissa (Armenian Wheat and Chicken Porridge)"`, function () {
            assert.equal(
                recipe.title,
                "Harissa (Armenian Wheat and Chicken Porridge)"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "4 cups (960ml) homemade or store-bought chicken stock",
                "1 pound boneless, skinless chicken thighs, cut in half crosswise, or boneless lamb stew meat, cut into 1-inch cubes (see notes)",
                "1 1/2 cups (276g) pearled farro (see notes)",
                "1 teaspoon Diamond Crystal kosher salt",
                "6 tablespoons (85g) butter",
                "4 tablespoons (60g) olive oil",
                "2 tablespoons (16g) Aleppo pepper (see notes)",
                "lavash, for serving (optional)"
            ]);
        });
    });
});
