//
// Broken
//
// import assert from "assert";
// import { describe, it } from "mocha";
// import { RecipeSchema } from "../parsers/RecipeSchema.js";
// import { get } from "./utils.js";

// let recipe: RecipeSchema;

// before(async function () {
//     this.timeout(10000);
//     recipe = await get("https://fredriksfika.allas.se/semmelcupcakes/");
// });

// describe("FredriksFikaAllas", function () {
//     describe("https://fredriksfika.allas.se/semmelcupcakes/", function () {
//         it(`should be authored by ""`, function () {
//             assert.equal(recipe.author, "");
//         });

//         it(`should be titled ""`, function () {
//             assert.equal(recipe.title, "");
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
