import { ReplacementParser } from "../ReplacementParser.js";

// https://github.com/hhursev/recipe-scrapers/blob/main/recipe_scrapers/goustojson.py
// Appears to call an API, which will require async added to ReplacementParser
// TODO Add async support

export class GoustoJson extends ReplacementParser {}
