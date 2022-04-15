import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.atelierdeschefs.fr/fr/recette/17741-boeuf-bourguignon-traditionnel.php"
    );
});

describe("AtelierDesChefs", function () {
    describe("https://www.atelierdeschefs.fr/fr/recette/17741-boeuf-bourguignon-traditionnel.php", function () {
        it(`should be authored by "L'atelier des Chefs"`, function () {
            assert.equal(recipe.author, "L'atelier des Chefs");
        });

        it(`should be titled "Boeuf bourguignon traditionnel"`, function () {
            assert.equal(recipe.title, "Boeuf bourguignon traditionnel");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "Boeuf à braiser ( jumeau, collier, macreuse ) : 1.5 kg",
                "Carotte(s) : 2 pièce(s)",
                "Oignon(s) : 1 pièce(s)",
                "Farine de blé : 30 g",
                "Gousse(s) d'ail : 2 pièce(s)",
                "Vin de Bourgogne : 1.5 l",
                "Huile de tournesol : 3 cl",
                "Sel fin : 6 pincée(s)",
                "Moulin à poivre : 6 tour(s)",
                "Fond de veau : 40 cl",
                "Lardon(s) : 150 g",
                "Oignon(s) grelot : 150 g",
                "Champignon(s) de Paris : 150 g",
                "Sucre en poudre : 10 g",
                "Beurre doux : 50 g",
                "Huile d'olive : 3 cl",
                "Persil plat : 0.25 botte(s)"
            ]);
        });
    });
});
