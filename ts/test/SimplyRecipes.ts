import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.simplyrecipes.com/baked-chicken-meatballs-recipe-5221326"
    );
});

describe("SimplyRecipes", function () {
    describe("https://www.simplyrecipes.com/baked-chicken-meatballs-recipe-5221326", function () {
        it(`should be authored by "Laurel Randolph"`, function () {
            assert.equal(recipe.author, "Laurel Randolph");
        });

        it(`should be titled "Baked Chicken Meatballs"`, function () {
            assert.equal(recipe.title, "Baked Chicken Meatballs");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "Non-stick cooking spray or 2 teaspoons olive oil",
                "1 pound ground chicken (preferably with 5% or more fat)",
                "1/2 cup plain breadcrumbs",
                "1/4 cup finely grated Parmesan or Romano cheese",
                "3 tablespoons milk (any kind)",
                "3 tablespoons fresh parsley, finely chopped, loosely packed",
                "2 cloves garlic, grated",
                "1 large egg, lightly beaten",
                "1/2 teaspoon kosher salt",
                "1/4 teaspoon freshly ground black pepper",
                "1/4 teaspoon crushed red pepper flakes, optional"
            ]);
        });

        it(`should have the correct instructions`, function () {
            assert.deepEqual(recipe.instructions, [
                "Preheat the oven: Preheat the oven to 425°F. Line a large, rimmed baking sheet with parchment paper and spray it lightly with cooking spray or lightly brush 1 teaspoon olive oil on it.",
                "Make the chicken mixture: In a large bowl, combine the ground chicken, breadcrumbs, Parmesan, milk, parsley, garlic, egg, salt, black pepper, and red pepper flakes, if using. Use your clean hands to gently mix until combined. Stop as soon as the ingredients are evenly distributed and be careful not to over-mix, since this will make the meatballs tough. Simply Recipes / Alison Bickel Simply Recipes / Alison Bickel",
                "Shape the meatballs: Use your fingers to pinch off enough mixture to make a 1-inch meatball. Use the palm of your hands to gently roll it into a ball, being careful to compress the mixture as little as possible. This will help keep the meatballs light. Place the meatball on the prepared baking sheet and repeat with the remaining mixture. Space the meatballs evenly on the baking sheet so that they don’t touch. You should have about 24 meatballs. Spray the tops lightly with cooking spray or brush them lightly with the remaining 1 teaspoon olive oil. Simply Recipes / Alison Bickel",
                "Bake the meatballs: Bake the meatballs until they are cooked through and browned on the bottom, 10 to 14 minutes. Cut through one to test. It should no longer be pink inside. You can also insert an instant-read thermometer into the center of a meatball. It should register at least 165°F. Be careful not to overcook so the meatballs do not dry out. The tops of the meatballs do not brown very much in the oven. Simply Recipes / Alison Bickel",
                "Serve: Enjoy the meatballs as is, pair them with your favorite sauce, add them to a soup, or use them to fill a sandwich. Leftover meatballs will keep for 4 days in the fridge. Reheat them in the microwave, in a 350°F oven for 10 to 15 minutes, or in a skillet over medium heat for 5 to 10 minutes, turning often. Or simply add them to a pot of hot broth or sauce until warmed through. Did you love the recipe? Leave us a review in the comments! Simply Recipes / Alison Bickel"
            ]);
        });
    });
});
