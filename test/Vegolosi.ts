import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://www.vegolosi.it/ricette-vegane-semplici-veloci/tagliolini-radicchio-e-seitan-aceto-balsamico/"
    );
});

describe("Vegolosi", function () {
    describe("https://www.vegolosi.it/ricette-vegane-semplici-veloci/tagliolini-radicchio-e-seitan-aceto-balsamico/", function () {
        it(`should be authored by "Cristiano Bonolo"`, function () {
            assert.equal(recipe.author, "Cristiano Bonolo");
        });

        it(`should be titled "Tagliolini con seitan, radicchio e aceto balsamico"`, function () {
            assert.equal(
                recipe.title,
                "Tagliolini con seitan, radicchio e aceto balsamico"
            );
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "320 g di tagliolini integrali",
                "250 g di seitan al naturale",
                "300 g di radicchio rosso",
                "100 ml di vino bianco secco",
                "1 cipolla",
                "1 spicchio d’aglio",
                "Olio extravergine di oliva",
                "Sale e pepe q.b.",
                "Aceto balsamico q.b. per decorare"
            ]);
        });
    });
});
