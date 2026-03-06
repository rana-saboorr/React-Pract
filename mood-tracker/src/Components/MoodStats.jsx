import React from "react";
import { useSelector } from "react-redux";

function MoodStats() {
  const moods = useSelector((state) => state.mood.moods);

  const counts = moods.reduce(
    (acc, m) => {
      acc[m.mood] = (acc[m.mood] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <div className="mt-6">
      <h3 className="text-black mb-2">Mood Summary:</h3>
      {Object.entries(counts).map(([mood, count]) => (
        <div key={mood} className="text-gray-200">
          {mood}: {count}
        </div>
      ))}
    </div>
  );
}

export default MoodStats;
