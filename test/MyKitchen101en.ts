import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://mykitchen101en.com/cheddar-cheese-butter-cake/"
    );
});

describe("MyKitchen101en", function () {
    describe("https://mykitchen101en.com/cheddar-cheese-butter-cake/", function () {
        it(`should be authored by "Mykitchen101en Team"`, function () {
            assert.equal(recipe.author, "Mykitchen101en Team");
        });

        it(`should be titled "Cheddar Cheese Butter Cake"`, function () {
            assert.equal(recipe.title, "Cheddar Cheese Butter Cake");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "100 g cheddar cheese",
                "60 g milk",
                "250 g butter (salted, softened)",
                "30 g fine sugar",
                "6 egg yolks (grade A/size L)",
                "240 g cake flour",
                "½ tsp baking powder"
            ]);
        });

        it(`should have the correct instructions`, function () {
            assert.deepEqual(recipe.instructions, [
                "1 Combine cheddar cheese and milk, heat in microwave (1000W) for about 40 seconds. Remove and stir until the cheese has melted. Set aside to cool completely.",
                "2 Grease and line 8-inch/20-cm square baking pan with non-stick baking paper.",
                "3 Add a tray of water (about 2 ½ cups) in the oven, then preheat oven to 160°C/320°F.",
                "4 Combine butter and sugar, beat over medium speed until light and fluffy. Add in egg yolks gradually, mix until combined. Add in cooled melted cheese, mix until combined.",
                "5 Combine cake flour and baking powder, sift through and mix well. Sift in flour in 3 batches, mix over low speed until combined.",
                "6 Whisk egg whites on low speed until tiny bubbles are formed. Add in sugar gradually, whisk until stiff peak (the peaks will point straight up and hold). (Reminder: Egg whites and equipment used to beat egg whites must be grease-free and water-free (including egg yolk). It is advisable to clean the egg shells and equipment with dishwasher detergent, then dry with a clean cloth. Use a clean small bowl to separate the egg yolk and egg white, if the egg yolk cracks, don’t use that egg white.)",
                "7 Add meringue into batter in 4 batches, mix gently with hand whisk.",
                "8 Fold gently until well mixed with spatula.",
                "9 Tap mixing bowl a few times on countertop to burst large bubbles, then pour batter into prepared baking pan, smooth the surface with spatula. Tap cake pan on countertop for a few times to burst large bubbles.",
                "10 Bake in the preheated oven at 160°C/320°F for 50 minutes, then at 180°C/355°F for 10 minutes, or until fully cooked (wooden stick inserted in the centre of the cake comes out clean). (Reminder: The heat for different oven is different, the suggested time is only for reference, adjust the baking time base on your oven if necessary.)",
                "11 Unmould and cool completely on wire rack (at least 6″ from countertop)."
            ]);
        });
    });
});
