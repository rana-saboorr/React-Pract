import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  moods: [],
};

export const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    addMood: (state, action) => {
      const { date, mood, note } = action.payload;
      state.moods.push({
        id: nanoid(),
        date,
        mood,
        note,
      });
    },
    editMood: (state, action) => {
      const { id, mood, note } = action.payload;
      const existingMood = state.moods.find((item) => item.id === id);
      if (existingMood) {
        existingMood.mood = mood;
        existingMood.note = note;
      }
    },
    removeMood: (state, action) => {
      state.moods = state.moods.filter((m) => m.id !== action.payload);
    },
  },
});

export const { addMood, editMood, removeMood } = moodSlice.actions;

export default moodSlice.reducer;
