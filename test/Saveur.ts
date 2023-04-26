import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.saveur.com/recipes/veal-with-cabrales-sauces/"
    );
});

describe("Saveur", function () {
    describe("https://www.saveur.com/recipes/veal-with-cabrales-sauces/", function () {
        it(`should be authored by "Consejo Regulador de Queso Cabrales"`, function () {
            assert.equal(recipe.author, "Consejo Regulador de Queso Cabrales");
        });

        it(`should be titled "Asturian-Style Veal Fillets with Cabrales Sauce, Fruit, and Chestnuts"`, function () {
            assert.equal(
                recipe.title,
                "Asturian-Style Veal Fillets with Cabrales Sauce, Fruit, and Chestnuts"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1 lb. 10 oz. boneless veal tenderloin, sliced into 1 in. thick medallions",
                "7 oz. Cabrales cheese",
                "1 cup brandy",
                "1 1⁄4 cups heavy cream",
                "Kosher salt",
                "Freshly ground white pepper",
                "1 tbsp. finely ground cornmeal",
                "1 cup dry hard cider",
                "1⁄4 cup plus 1 Tbsp. olive oil, divided",
                "2 tbsp. unsalted butter",
                "2 medium golden delicious apples, cored and coarsely chopped",
                "1 cup (5 oz.) mixed dried fruit (such as apricots and raisins) coarsely chopped",
                "1 cup (7 oz.) cooked, peeled, small chestnuts",
                "Coarsely chopped parsley, for garnish"
            ]);
        });
    });
});
