import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("TheSpruceEats", function () {
    describe("https://www.thespruceeats.com/baked-halibut-butter-parmesan-topping-3057312", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.thespruceeats.com/baked-halibut-butter-parmesan-topping-3057312"
            );
        });

        it(`should be authored by "Diana Rattray"`, function () {
            assert.equal(recipe.author, "Diana Rattray");
        });

        it(`should be titled "Baked Halibut With Parmesan Crumb Topping"`, function () {
            assert.equal(
                recipe.title,
                "Baked Halibut With Parmesan Crumb Topping"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "4 (6-ounce) halibut fillets",
                "3 slices of sandwich bread",
                "2 tablespoons grated parmesan cheese",
                "1 tablespoon finely chopped fresh parsley",
                "1/2 teaspoon garlic powder",
                "1/2 teaspoon onion powder",
                "1/4 teaspoon kosher salt",
                "1 dash ground black pepper",
                "2 tablespoons unsalted butter",
                "Lemon wedges",
            ]);
        });
    });
});
