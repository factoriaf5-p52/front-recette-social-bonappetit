export interface IRecipe {
    title: string;
    description: string;
    author: any;
    ingredients: Array<{ 
        ingredient: any, 
        qty: number 
    }>;
    time: number;
    is_private: boolean;
    tags:string[];
    mealType: string;
    image: string;

}

