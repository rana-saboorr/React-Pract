import { createSlice } from '@reduxjs/toolkit';

const loadCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const initialState = {
  user: loadCurrentUser(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    updateUser(state, action) {
      if (!state.user) {
        state.user = action.payload;
      } else {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { setUser, clearUser, updateUser } = authSlice.actions;

export default authSlice.reducer;

