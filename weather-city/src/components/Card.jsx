import { useState, useEffect, useCallback } from "react";
import WeatherCard from "./WeatherCard.jsx";

export default function Card({ type }) {
  const [city, setCity] = useState(type === "effect" ? "Islamabad" : "");
  const apiKey = "13ad39c0264907bb6cafa13a997fcd54";

  const [data, setData] = useState(null);
  const [error, setError] = useState("");   // ✅ error state
  const [loading, setLoading] = useState(false); // ✅ loading state

  // =========================
  // useEffect → AUTO FETCH
  // =========================
  useEffect(() => {
    if (type !== "effect") return;
    if (!city) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");
      setData(null);

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        const result = await res.json();

        if (result.cod !== "200") {
          setError("City not found ❌");
          return;
        }

        setData(result);
      } catch (err) {
        setError("Something went wrong ⚠️");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, type]);

  // =========================
  // useCallback → MANUAL
  // =========================
  const fetchDataCallback = useCallback(async () => {
    if (type !== "callback") return;
    if (!city) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const result = await res.json();

      if (result.cod !== "200") {
        setError("City not found ❌");
        return;
      }

      setData(result);
    } catch (err) {
      setError("Something went wrong ⚠️");
    } finally {
      setLoading(false);
    }
  }, [city, type]);

  return (
    <div className="flex flex-col gap-3 p-4 border border-gray-300 rounded-lg shadow-md w-80 bg-white">
      <h3 className="text-center font-bold">
        {type === "effect" ? "useEffect (Auto)" : "useCallback (Manual)"}
      </h3>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg"
        />

        {type === "callback" && (
          <button
            onClick={fetchDataCallback}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold"
          >
            Search
          </button>
        )}
      </div>

      {/* 🔽 UI STATES */}
      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600 font-semibold">{error}</p>}
      {data && <WeatherCard data={data} />}
    </div>
  );
}
