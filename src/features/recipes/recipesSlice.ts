// src/features/recipes/recipesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Recipe, RecipesState } from '../../types/interface'

const initialState: RecipesState = {
  recipes: []
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe (state, action: PayloadAction<Recipe>) {
      state.recipes.push(action.payload)
    },
    removeRecipe (state, action: PayloadAction<string>) {
      state.recipes = state.recipes.filter(
        recipe => recipe.id !== action.payload
      )
    },
    updateRecipe (state, action: PayloadAction<Recipe>) {
      const index = state.recipes.findIndex(
        recipe => recipe.id === action.payload.id
      )
      if (index !== -1) {
        state.recipes[index] = action.payload
      }
    }
  }
})

export const { addRecipe, removeRecipe, updateRecipe } = recipesSlice.actions
export default recipesSlice.reducer
