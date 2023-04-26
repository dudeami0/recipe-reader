import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get("https://www.valdemarsro.dk/kebabsalat/");
});

describe("Valdemarsro", function () {
    describe("https://www.valdemarsro.dk/kebabsalat/", function () {
        it(`should be authored by "Ann-Christine Hellerup Brandt"`, function () {
            assert.equal(recipe.author, "Ann-Christine Hellerup Brandt");
        });

        it(`should be titled "Kebabsalat"`, function () {
            assert.equal(recipe.title, "Kebabsalat");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "400 g entrecotes, eller anden udskæring, skåret i meget tynde skiver",
                "0,50 tsk hvidløgspulver",
                "1 tsk stødt spidskommen",
                "1 tsk stødt koriander",
                "1 tsk oregano, tørret",
                "0,50 tsk rosmarin, tørret",
                "1 tsk sød paprika",
                "1 knivspids røget paprika",
                "1 knivspids kanel",
                "1 knivspids stødt nellike",
                "1 knivspids chiliflager",
                "salt",
                "sort peber, friskkværnet",
                "4 spsk olivenolie, til stegning",
                "2 dl cremefraiche 18 %",
                "2 fed hvidløg, pressede",
                "0,50 øko citron, lidt fintrevet skal og saft herfra",
                "1 tsk sukker",
                "1 knivspids cayenne peber",
                "0,50 tsk dijon sennep",
                "1 håndfuld purløg, finthakket",
                "salt",
                "sort peber, friskkværnet",
                "150 g salat",
                "1 agurk, halveret og skåret i skiver",
                "1 rødløg, skåret i tynde både",
                "100 g cherrytomater, skåret i kvarte",
                "1 håndfuld bredbladet persille"
            ]);
        });
    });
});
