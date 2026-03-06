  import { useState, useCallback } from "react";

export default function useFetchData(cityName, apiKey) {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    if (!cityName || !apiKey) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Fetch error:", err);
      setData(null);
    }
  }, [cityName, apiKey]);

  return { data, fetchData };
}
