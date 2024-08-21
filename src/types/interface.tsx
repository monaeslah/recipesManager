export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  recipeNotes: string;
  tags: string[];
  videoLink: string;
  source: string;
  nutritionInfo: string;
  pairingNotes: string;
  ingredients: string[];
  instructions: string[];
}
export interface RecipesState {
  recipes: Recipe[];
}
