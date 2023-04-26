import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://inspiralized.com/air-fryer-salmon-in-green-curry-cauliflower-sauce/"
    );
});

describe("Inspiralized", function () {
    describe("https://inspiralized.com/air-fryer-salmon-in-green-curry-cauliflower-sauce/", function () {
        it(`should be authored by "Ali Maffucci"`, function () {
            assert.equal(recipe.author, "Ali Maffucci");
        });

        it(`should be titled "Air Fryer Salmon in Green Curry Cauliflower Sauce"`, function () {
            assert.equal(
                recipe.title,
                "Air Fryer Salmon in Green Curry Cauliflower Sauce"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 ½ pounds skinless salmon cut into 4-inch pieces",
                "salt and pepper",
                "2 tablespoons avocado oil",
                "2 small shallots minced",
                "2 garlic cloves minced",
                "2 tablespoons Thai green curry paste",
                "2 cups small cauliflower florets 1/2-inch pieces",
                "1 15-ounce lite coconut milk",
                "½ cup vegetable broth",
                "2 teaspoons fish sauce",
                "grated zest of 1 lime",
                "1 tablespoon freshly squeezed lime juice",
                "½ cup roughly chopped fresh cilantro leaves",
                "¼ cup fresh mint leaves",
                "¼ cup fresh Thai basil leaves",
                "2 cups steamed jasmine rice",
                "1 lime cut into wedges, for serving"
            ]);
        });
    });
});
