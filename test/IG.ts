// Broken
// -----------
//
// import assert from "assert";
// import { describe, it } from "mocha";
// import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
// import { get } from "./utils.js";

// let recipe: RecipeSchema;

// before(async function () {
//     this.timeout(10000);
//     recipe = await get(
//         "https://receitas.ig.com.br/2021-01-15/voce-sabe-o-que-e-rubacao-aprenda-a-fazer-o-prato-tipico-paraibano.html?utm_source=noticias&utm_medium=voceviu"
//     );
// });

// describe("IG", function () {
//     describe("https://receitas.ig.com.br/2021-01-15/voce-sabe-o-que-e-rubacao-aprenda-a-fazer-o-prato-tipico-paraibano.html?utm_source=noticias&utm_medium=voceviu", function () {
//         it(`should be authored by "Colleen B. Smith"`, function () {
//             assert.equal(recipe.author, "Colleen B. Smith");
//         });

//         it(`should be titled "Honey Glazed Ham"`, function () {
//             assert.equal(recipe.title, "Honey Glazed Ham");
//         });

//         it(`should have the correct ingredients`, function () {
//             assert.deepEqual(recipe.ingredients, [
//                 "1 (5 pound) ready-to-eat ham",
//                 "¼ cup whole cloves",
//                 "¼ cup dark corn syrup",
//                 "2 cups honey",
//                 "⅔ cup butter"
//             ]);
//         });
//     });
// });
