import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMood } from "../feature/moodSlice";

function AddMood() {
  const [mood, setMood] = useState("Happy");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const addMoodHandler = (e) => {
    e.preventDefault();
    dispatch(addMood({
      date: new Date().toISOString().split("T")[0], 
      mood,
      note
    }));
    setNote(""); 
  };

  return (
    <form onSubmit={addMoodHandler} className="space-x-3 mt-6">
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="bg-gray-800 rounded border border-gray-700 text-gray-100 px-3 py-1"
      >
        <option>Happy</option>
        <option>Sad</option>
        <option>Angry</option>
        <option>Neutral</option>
      </select>

      <input
        type="text"
        placeholder="Optional note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="bg-gray-800 rounded border border-gray-700 text-gray-100 px-3 py-1"
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600"
      >
        Add Mood
      </button>
    </form>
  );
}

export default AddMood;
