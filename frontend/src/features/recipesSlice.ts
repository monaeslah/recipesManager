import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Recipe, RecipesState } from '../types/interface'
const initialState: RecipesState = {
  recipes: []
}
// Utility function to load state from local storage
const loadStateFromLocalStorage = (): RecipesState => {
  try {
    const serializedState = localStorage.getItem('recipes')
    if (serializedState === null) {
      return { recipes: [] } // No state in local storage, return default state
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Could not load state from local storage', err)
    return { recipes: [] } // On error, return default state
  }
}

// Utility function to save state to local storage
const saveStateToLocalStorage = (state: RecipesState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('recipes', serializedState)
  } catch (err) {
    console.error('Could not save state to local storage', err)
  }
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload
    },
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload)
    },
    removeRecipe (state, action: PayloadAction<string>) {
      state.recipes = state.recipes.filter(
        recipe => recipe.id !== action.payload
      )
      saveStateToLocalStorage(state)
    },
    updateRecipe (state, action: PayloadAction<Recipe>) {
      const index = state.recipes.findIndex(
        recipe => recipe.id === action.payload.id
      )
      if (index !== -1) {
        state.recipes[index] = action.payload
        saveStateToLocalStorage(state)
      }
    }
  }
})

export const { addRecipe, removeRecipe, updateRecipe } = recipesSlice.actions
export default recipesSlice.reducer
