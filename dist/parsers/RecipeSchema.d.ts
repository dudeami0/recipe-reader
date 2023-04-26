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
export declare function isRecipeSchema(obj: any): boolean;
