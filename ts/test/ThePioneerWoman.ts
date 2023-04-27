import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("ThePioneerWoman", function () {
    describe("https://www.thepioneerwoman.com/food-cooking/recipes/a39002935/easter-bread-recipe/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.thepioneerwoman.com/food-cooking/recipes/a39002935/easter-bread-recipe/"
            );
        });

        it(`should be authored by "By Josh Miller; Recipe by Sloane Layton"`, function () {
            assert.equal(
                recipe.author,
                "By Josh Miller; Recipe by Sloane Layton"
            );
        });

        it(`should be titled "Easter Bread"`, function () {
            assert.equal(recipe.title, "Easter Bread");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1/4 c. warm water (about 110°)",
                "1 tbsp. active dry yeast (from 2 1/4-oz. packets)",
                "3/4 c. warm milk (about 110°)",
                "1/2 c. granulated sugar",
                "6 tbsp. unsalted butter, melted",
                "3 large eggs, divided",
                "4 1/2 c. all-purpose flour, plus more for the surface",
                "2 1/2 tsp. salt",
                "Nonstick cooking spray",
                "4 dyed uncooked eggs, at room temperature (optional)",
                "1 c. powdered sugar",
                "2 tbsp. whole milk",
                "Rainbow sprinkles, for garnish (optional)",
            ]);
        });

        it(`should have the correct instructions`, function () {
            assert.deepEqual(recipe.instructions, [
                "Stir together the water and the yeast in a small bowl. Let the mixture stand until it is foamy, about 5 minutes. Combine the yeast mixture, milk, sugar, butter, and 2 of the eggs, beaten, in the bowl of a stand mixer fitted with a dough hook. Beat on medium-low speed until combined, about 30 seconds. Add the flour and salt and mix with a spatula until a shaggy dough forms. Return the bowl to the mixer; increase the speed to medium and beat until the dough is smooth, elastic and tacky, about 5 minutes.",
                "Transfer the dough to a large bowl lightly greased with nonstick cooking spray. Cover the bowl with plastic wrap and let the dough rise at warm room temperature until the dough is doubled in size, 1 to 1 1/2 hours.",
                "Turn the dough out onto a lightly floured surface and divide it into 3 equal portions (about 12 ounces each). Roll each of the portions into an 18- to 20-inch long rope. Braid the ropes together, pinching the ends to seal and tucking them underneath. Transfer the braid to a parchment-lined baking sheet. If desired, tuck dyed eggs into the braid, spacing them evenly apart. Cover the loaf loosely with plastic wrap and let it rise at warm room temperature until it has puffed, 30 to 45 minutes.",
                "During the last 30 minutes of proofing, preheat the oven to 350°. Uncover the loaf and brush it lightly with the remaining beaten egg. Bake the loaf until it is golden brown, 28 to 32 minutes. Slide the loaf and the parchment paper onto a wire rack to cool completely, about 1 1/2 hours.",
                "Whisk together the powdered sugar and the milk until smooth in a medium bowl. (Add a touch more milk, if needed). Drizzle the glaze over the cooled loaf and decorate with sprinkles, if you like.",
            ]);
        });
    });
});
