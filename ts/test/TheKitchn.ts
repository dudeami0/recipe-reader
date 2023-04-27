// Error: Failed to resolve (Forbidden): https://www.thekitchn.com/matzo-toffee-bark-recipe-23326977

// import assert from "assert";
// import { describe, it } from "mocha";
// import { RecipeSchema } from "../parsers/RecipeSchema.js";
// import { get } from "./utils.js";

// describe("TheKitchn", function () {
//     describe("https://www.thekitchn.com/matzo-toffee-bark-recipe-23326977", function () {
//         let recipe: RecipeSchema;

//         before(async function () {
//             this.timeout(10000);
//             recipe = await get(
//                 "https://www.thekitchn.com/matzo-toffee-bark-recipe-23326977"
//             );
//         });

//         it(`should be authored by "Jessie Sheehan"`, function () {
//             assert.equal(recipe.author, "Jessie Sheehan");
//         });

//         it(`should be titled "How to Make Matzo Toffee Bark"`, function () {
//             assert.equal(recipe.title, "How to Make Matzo Toffee Bark");
//         });

//         it(`should have the correct ingredients`, function () {
//             assert.deepEqual(recipe.ingredients, [
//                 "4 sheets matzos",
//                 "1 1/4 cups packed dark brown sugar",
//                 "2 sticks (1 cup) unsalted butter",
//                 "1 tablespoon vanilla extract",
//                 "1 1/2 teaspoons kosher salt",
//                 "1 to 1 1/2 cups bittersweet chocolate chips or chopped chocolate",
//                 "Flaky salt, for sprinkling",
//             ]);
//         });
//     });
// });
