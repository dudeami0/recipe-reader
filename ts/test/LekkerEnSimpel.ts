import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("LekkerEnSimpel", function () {
    describe("https://www.lekkerensimpel.com/gevulde-avocado-met-eiersalade/", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.lekkerensimpel.com/gevulde-avocado-met-eiersalade/"
            );
        });

        it(`should be titled "Gevulde avocado met eiersalade"`, function () {
            assert.equal(recipe.title, "Gevulde avocado met eiersalade");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "4 eieren",
                "2 avocado's",
                "1 bosui",
                "3 el mayonaise",
                "4 plakjes ham",
                "1 tl bieslook",
                "0.5 tl knoflookpoeder",
                "snufje peper en zout",
            ]);
        });
    });
});
