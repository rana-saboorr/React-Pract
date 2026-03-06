import { configureStore } from "@reduxjs/toolkit";

import moodReducer from '../feature/moodSlice';

export const store = configureStore({
  reducer: {
    mood: moodReducer,
  },
});
