export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  recipeNotes: string;
  selectedTags: string[];
  videoLink: string;
  source: string;
  nutritionInfo: string;
  pairingNotes: string;
  ingredients: string | undefined;
  instructions: string | undefined;
}
export interface RecipesState {
  recipes: Recipe[];
}
