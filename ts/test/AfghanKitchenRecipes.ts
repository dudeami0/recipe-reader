import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("AfghanKitchenRecipes", function () {
    describe("http://www.afghankitchenrecipes.com/recipe/norinj-palau-rice-with-orange/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "http://www.afghankitchenrecipes.com/recipe/norinj-palau-rice-with-orange/"
            );
        });

        it(`should be authored by "nash"`, function () {
            assert.equal(recipe.author, "nash");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "450 g long grain white rice, preferably basmati",
                "75 ml vegetable oil",
                "2 medium onions, chopped",
                "1 medium chicken or 700–900 g lamb on the bone cut in pieces",
                "570 ml water, plus 110 ml water",
                "peel of 1 large orange",
                "50 g sugar",
                "50 g blanched and flaked almonds",
                "50 g blanched and flaked pistachios",
                "½ tsp saffron or egg yellow food colour  (optional)",
                "25 ml rosewater (optional)",
                "1 tsp ground green or white cardamom seeds  (optional)",
                "salt and pepper",
            ]);
        });
    });
});
