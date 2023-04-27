import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("MarthaStewart", function () {
    describe("https://www.marthastewart.com/1554707/creamy-chicken-and-mushrooms-egg-noodles", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.marthastewart.com/1554707/creamy-chicken-and-mushrooms-egg-noodles"
            );
        });

        it(`should be authored by "Sarah Carey"`, function () {
            assert.equal(recipe.author, "Sarah Carey");
        });

        it(`should be titled "Creamy Chicken and Mushrooms with Egg Noodles"`, function () {
            assert.equal(
                recipe.title,
                "Creamy Chicken and Mushrooms with Egg Noodles"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "4 small boneless, skinless chicken-breast halves (about 1 ¼ pounds total), pounded ½ inch thick",
                "Kosher salt and freshly ground pepper",
                "3 tablespoons extra-virgin olive oil",
                "10 ounces button mushrooms, trimmed and thinly sliced (4 cups)",
                "2 shallots, thinly sliced (1 cup)",
                "4 teaspoons Dijon mustard",
                "2.5 cups low-sodium chicken broth",
                "4.5 ounces medium or broad curly egg noodles (about 2 ½ cups)",
                "3 ounces cream cheese (⅔ cup), room temperature",
                "Fresh parsley leaves, for serving (optional)",
            ]);
        });
    });
});
