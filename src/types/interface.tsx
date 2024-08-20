export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  imageUrl?: string;
  category: string;
}
export interface RecipesState {
  recipes: Recipe[];
}
