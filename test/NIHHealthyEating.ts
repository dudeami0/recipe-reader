// Cannot connect - redirect error
// --------------------------------
//
// import assert from "assert";
// import { describe, it } from "mocha";
// import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
// import { get } from "./utils.js";

// let recipe: RecipeSchema;

// before(async function () {
//     this.timeout(10000);
//     recipe = await get(
//         "https://healthyeating.nhlbi.nih.gov/recipedetail.aspx?linkId=11&cId=1&rId=4"
//     );
// });

// describe("NIHHealthyEating", function () {
//     describe("https://healthyeating.nhlbi.nih.gov/recipedetail.aspx?linkId=11&cId=1&rId=4", function () {
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
