import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("JamieOliver", function () {
    describe("https://www.jamieoliver.com/recipes/chocolate-recipes/chocolate-hot-cross-buns/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.jamieoliver.com/recipes/chocolate-recipes/chocolate-hot-cross-buns/"
            );
        });

        it(`should be authored by "Jamie Oliver"`, function () {
            assert.equal(recipe.author, "Jamie Oliver");
        });

        it(`should be titled "Chocolate hot cross buns"`, function () {
            assert.equal(recipe.title, "Chocolate hot cross buns");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "50 g unsalted butter",
                "50 g golden caster sugar",
                "1 heaped teaspoon mixed spice",
                "1 whole nutmeg , for grating",
                "200 ml semi-skimmed milk",
                "1 large free-range egg",
                "400 g strong white bread flour , plus 2 tablespoons and extra for dusting",
                "50 g quality cocoa powder",
                "1 x 7 g sachet of dried yeast",
                "150 g quality dark chocolate , (70%)",
                "100 g raisins , or mixed dried fruit",
                "3 tablespoons runny honey",
            ]);
        });
    });
});
