import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Define the interface for login state
interface LoginState {
  isAuthenticated: boolean
  token: string | null
  loading: boolean
  error: string | null
}

// Initial state
const initialState: LoginState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null
}

// Async thunk to handle login request
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post('/api/login', credentials)
      const { token } = response.data
      return token // Return token on successful login
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Login failed')
    }
  }
)

// Utility function to load authentication state from local storage
const loadStateFromLocalStorage = (): LoginState => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      return { isAuthenticated: true, token, loading: false, error: null }
    }
    return initialState
  } catch (err) {
    console.error('Could not load state from local storage', err)
    return initialState
  }
}

// Utility function to save authentication state to local storage
const saveStateToLocalStorage = (state: LoginState) => {
  try {
    if (state.token) {
      localStorage.setItem('token', state.token)
    } else {
      localStorage.removeItem('token')
    }
  } catch (err) {
    console.error('Could not save state to local storage', err)
  }
}

// Create the login slice
const loginSlice = createSlice({
  name: 'login',
  initialState: loadStateFromLocalStorage(),
  reducers: {
    logout (state) {
      state.isAuthenticated = false
      state.token = null
      saveStateToLocalStorage(state)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.isAuthenticated = true
        state.token = action.payload
        state.loading = false
        saveStateToLocalStorage(state)
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

// Export the actions and reducer
export const { logout } = loginSlice.actions
export default loginSlice.reducer
