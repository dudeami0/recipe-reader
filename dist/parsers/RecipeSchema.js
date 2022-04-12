function isString(obj) {
    return typeof obj === "string" || obj === undefined;
}
function isStringArr(obj) {
    return (obj instanceof Array &&
        obj.filter((o) => typeof o === "string").length == obj.length);
}
export function isRecipeSchema(obj) {
    return (typeof obj.host === "string" &&
        isString(obj.author) &&
        isString(obj.title) &&
        isString(obj.category) &&
        isString(obj.total_time) &&
        isString(obj.yields) &&
        isString(obj.image) &&
        isStringArr(obj.ingredients) &&
        (isString(obj.instructions) || isStringArr(obj.instructions)) &&
        isString(obj.ratings) &&
        isString(obj.cuisine) &&
        isString(obj.description));
}
//# sourceMappingURL=RecipeSchema.js.map