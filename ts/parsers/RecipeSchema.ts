export interface RecipeSchema {
    _raw?: any;
    host: string;
    author?: string;
    title?: string;
    category?: string;
    total_time?: string;
    yields?: string;
    image?: string;
    ingredients?: string[];
    instructions?: string | string[];
    ratings?: string;
    cuisine?: string;
    description?: string;
}

function isString(obj: any) {
    return typeof obj === "string" || obj === undefined;
}

function isStringArr(obj: any) {
    return (
        obj instanceof Array &&
        obj.filter((o) => typeof o === "string").length == obj.length
    );
}

export function isRecipeSchema(obj: any) {
    return (
        typeof obj.host === "string" &&
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
        isString(obj.description)
    );
}
