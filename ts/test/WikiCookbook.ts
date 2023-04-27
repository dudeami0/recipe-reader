import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("WikiCookbook", function () {
    describe("https://en.wikibooks.org/wiki/Cookbook:French_Toast", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://en.wikibooks.org/wiki/Cookbook:French_Toast"
            );
        });

        it(`should be titled "Cookbook:French Toast"`, function () {
            assert.equal(recipe.title, "Cookbook:French Toast");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 egg",
                "About ¼ cup (60 ml / 2 oz) milk or cream (more for softer, less eggy French toast; less for firmer, more eggy toast)",
                "2–3 slices bread (see notes)",
                "Butter, margarine, or cooking oil",
                "½ teaspoon vanilla extract or similar",
                "¼–1 teaspoon nutmeg, cinnamon or other powdered spices suitable for sweet foods",
                "½ teaspoon sugar or honey",
                "¼ teaspoon salt",
                "¼ teaspoon pepper",
                "Maple syrup",
                "Jam, jelly, fruit syrup",
                "Whipped cream",
                "Powdered sugar",
                "Nuts",
                "Honey",
                "Bacon",
                "Raspberries, strawberries, blueberries, and/or bananas",
            ]);
        });

        it(`should have the correct instructions`, function () {
            assert.deepEqual(recipe.instructions, [
                "In a bowl, mix eggs and milk, and optional ingredients.",
                "Heat up a frying pan, skillet, or griddle to medium-low heat.",
                "Grease the pan with butter, margarine, or cooking spray.",
                "Soak a slice of bread in the egg-milk mixture and place on pan; repeat until pan is full or desired amount is placed.",
                "Cook, turning once, until both sides of the bread are browned and the inside is cooked through.",
                "Serve on plates, with toppings as desired.",
            ]);
        });
    });
});
