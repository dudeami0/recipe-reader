import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

describe("AtelierDesChefs", function () {
    describe("https://www.atelierdeschefs.fr/fr/recette/17741-boeuf-bourguignon-traditionnel.php", function () {
        let recipe: RecipeSchema;

        before(async function () {
            this.timeout(10000);
            recipe = await get(
                "https://www.atelierdeschefs.fr/fr/recette/17741-boeuf-bourguignon-traditionnel.php"
            );
        });

        it(`should be authored by "L'atelier des Chefs"`, function () {
            assert.equal(recipe.author, "L'atelier des Chefs");
        });

        it(`should be titled "Bœuf bourguignon traditionnel"`, function () {
            assert.equal(recipe.title, "Bœuf bourguignon traditionnel");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "1.5 kg Boeuf à braiser ( jumeau, collier, macreuse )",
                "2 pièce(s) Carotte(s)",
                "1 pièce(s) Oignon(s)",
                "30 g Farine de blé",
                "2 pièce(s) Gousse(s) d'ail",
                "1.5 l Vin de Bourgogne",
                "3 cl Huile de tournesol",
                "6 pincée(s) Sel fin",
                "6 tour(s) Moulin à poivre",
                "40 cl Fond de veau",
                "150 g Lardon(s)",
                "150 g Oignon(s) grelot",
                "150 g Champignon(s) de Paris",
                "10 g Sucre en poudre",
                "50 g Beurre doux",
                "3 cl Huile d'olive",
                "0.25 botte(s) Persil plat",
            ]);
        });
    });
});
