import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("HomeChef", function () {
    describe("https://www.homechef.com/meals/brussels-brown-butter-risotto", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.homechef.com/meals/brussels-brown-butter-risotto"
            );
        });

        it(`should be authored by "Chef Scott Gorsky"`, function () {
            assert.equal(recipe.author, "Chef Scott Gorsky");
        });

        it(`should be titled "Brussels & Brown Butter Risotto with goat cheese and pecans"`, function () {
            assert.equal(
                recipe.title,
                "Brussels & Brown Butter Risotto with goat cheese and pecans"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "8 oz. Brussels Sprouts",
                "¾ cup Arborio Rice",
                "1 Shallot",
                "Info 1 oz. Grated Parmesan",
                "Info 1 oz. Butter",
                "1 oz. White Cooking Wine",
                "Info 1 oz. Goat Cheese",
                "Info ½ oz. Roasted Pecans",
                "2 tsp. Mirepoix Broth Concentrate",
                "¼ oz. Parsley",
            ]);
        });
    });
});
