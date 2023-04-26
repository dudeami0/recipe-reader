import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://recipes.timesofindia.com/us/recipes/karela-seekh-kebab/rs90791520.cms"
    );
});

describe("TimesOfIndia", function () {
    describe("https://recipes.timesofindia.com/us/recipes/karela-seekh-kebab/rs90791520.cms", function () {
        it(`should be authored by "by TNN"`, function () {
            assert.equal(recipe.author, "by TNN");
        });

        it(`should be titled "Karela Seekh Kebab Recipe"`, function () {
            assert.equal(recipe.title, "Karela Seekh Kebab Recipe");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "2 bitter gourd",
                "1 teaspoon cumin seeds",
                "1 tablespoon chopped ginger",
                "100 gm spinach",
                "1/2 teaspoon powdered black pepper",
                "1/2 cup khoya",
                "1/2 cup gram flour (besan)",
                "1 tablespoon ghee",
                "2 tablespoon minced garlic",
                "100 gm green beans",
                "200 grated potato",
                "5 almonds",
                "50 gm corn",
                "salt as required"
            ]);
        });
    });
});
