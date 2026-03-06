import { useState, useEffect, useCallback } from "react";
import Config from "../../config/Config";

export default function useApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const requests = Array.from({ length: 50 }, (_, i) =>
        fetch(`${Config.movieApiUrl}${Config.movieApiKey}&page=${i + 1}`).then(
          (res) => res.json(),
        ),
      );

      const responses = await Promise.all(requests);

      const allMovies = responses.flatMap((r) => r.results);
      console.log(allMovies);
      
      const unique = [...new Map(allMovies.map((m) => [m.id, m])).values()];
      setData(unique);
    
    } 
    catch (error) 
    {
      console.error(error);
    } 
    finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
}
