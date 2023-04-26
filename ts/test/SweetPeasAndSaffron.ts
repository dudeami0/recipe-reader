import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://sweetpeasandsaffron.com/slow-cooker-cilantro-lime-chicken-tacos-freezer-slow-cooker/"
    );
});

describe("SweetPeasAndSaffron", function () {
    describe("https://sweetpeasandsaffron.com/slow-cooker-cilantro-lime-chicken-tacos-freezer-slow-cooker/", function () {
        it(`should be authored by "Denise Bustard"`, function () {
            assert.equal(recipe.author, "Denise Bustard");
        });

        it(`should be titled "Cilantro Lime Chicken Crockpot Tacos"`, function () {
            assert.equal(recipe.title, "Cilantro Lime Chicken Crockpot Tacos");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "▢ 4 chicken breasts roughly 2 lbs; boneless skinless chicken thighs may also be used * see note 1",
                "▢ 11.5 oz can of corn kernels drained; 341 mL",
                "▢ 15 oz can of black beans drained & rinsed; optional",
                "▢ 1 red onion sliced into strips",
                "▢ ½ cup chicken stock",
                "▢ 2 cloves garlic",
                "▢ ¼ teaspoon salt",
                "▢ ½ teaspoon cumin",
                "▢ ¼ teaspoon ground coriander",
                "▢ 1 lime zested",
                "▢ 2 tablespoons honey note 2",
                "▢ ¼ cup packed cilantro leaves",
                "▢ Tortillas 2 small tortillas per person",
                "▢ shredded cabbage",
                "▢ radish slices",
                "▢ greek yogurt"
            ]);
        });
    });
});
