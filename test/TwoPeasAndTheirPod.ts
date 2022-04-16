import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://www.twopeasandtheirpod.com/curry-lentil-soup/");
});

describe("TwoPeasAndTheirPod", function () {
    describe("https://www.twopeasandtheirpod.com/curry-lentil-soup/", function () {
        it(`should be authored by "Maria Lichty"`, function () {
            assert.equal(recipe.author, "Maria Lichty");
        });

        it(`should be titled "Curry Lentil Soup"`, function () {
            assert.equal(recipe.title, "Curry Lentil Soup");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 tablespoons olive oil or coconut oil",
                "1 medium yellow onion, (diced)",
                "1 carrot, (diced)",
                "1 red bell pepper, (seeds removed and diced)",
                "4 garlic cloves, (finely chopped)",
                "2- inch piece ginger, (peeled and finely grated)",
                "1 tablespoon yellow curry powder",
                "1/4 teaspoon crushed red pepper flakes",
                "3/4 cup red lentils, (rinsed, drained, and picked over)",
                "2 1/2 cups vegetable broth",
                "1 14.5- ounce can diced fire roasted tomatoes",
                "1 13.5- ounce can coconut milk, (shaken well)",
                "1/2 cup chopped cilantro",
                "Kosher salt and pepper, (to taste)",
                "Garnish: extra cilantro, (drizzle of coconut milk, lime wedges)"
            ]);
        });
    });
});
