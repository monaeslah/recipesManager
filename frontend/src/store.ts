// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './features/recipesSlice'

const store = configureStore({
  reducer: {
    recipes: recipesReducer
  }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
