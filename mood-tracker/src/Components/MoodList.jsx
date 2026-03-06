import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMood } from "../feature/moodSlice";

function MoodList() {
  const moods = useSelector((state) => state.mood.moods);
  const dispatch = useDispatch();

  return (
    <ul className="list-none mt-6">
      {moods.map((m) => (
        <li
          key={m.id}
          className="flex justify-between items-center bg-orange-200 px-4 py-2 rounded mt-2"
        >
          <div className="text-black">
            {m.date} — {m.mood} {m.note && `: ${m.note}`}
          </div>
          <button
            onClick={() => dispatch(removeMood(m.id))}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MoodList;
