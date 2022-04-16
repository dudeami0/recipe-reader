import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.simplyquinoa.com/vegan-rice-paper-dumplings/"
    );
});

describe("SimplyQuinoa", function () {
    describe("https://www.simplyquinoa.com/vegan-rice-paper-dumplings/", function () {
        it(`should be authored by "Alyssa"`, function () {
            assert.equal(recipe.author, "Alyssa");
        });

        it(`should be titled "Rice Paper Dumplings"`, function () {
            assert.equal(recipe.title, "Rice Paper Dumplings");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "for the filling:",
                "1 tablespoon olive oil",
                "1 carrot",
                "1 bell pepper",
                "1 cup shiitake mushrooms",
                "4 scallions",
                "8 oz tofu",
                "1 tablespoon soy sauce",
                "1/2 teaspoon garlic powder",
                "1/2 teaspoon ground ginger",
                "for the dumplings:",
                "8 rice paper rounds",
                "Filling",
                "3 tablespoons olive or avocado oil"
            ]);
        });
    });
});
