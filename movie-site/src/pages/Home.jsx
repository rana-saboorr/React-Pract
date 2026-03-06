import { useMemo } from "react";
import ApiData from "../Components/Api/ApiData";
import MovieRow from "../Components/MovieRow";

function Home() {
  const { data, loading } = ApiData();

  const { row1, row2 } = useMemo(() => {
    const mid = Math.ceil(data.length / 2);
    return {
      row1: data.slice(1, mid),
      row2: data.slice(mid),
    };
  }, [data]);

  if (loading) return <p className="text-white text-bold">Loading movies...</p>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-white text-2xl font-bold">Trending Movies</h1>

      <MovieRow movies={row1} />
      <MovieRow movies={row2} reverse/>
    </div>
  );
}

export default Home;
