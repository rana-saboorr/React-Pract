import { useMemo } from "react";
import MovieCard from "../Components/MovieCard";

function MovieRow({ movies, reverse = false }) {
  const orderedMovies = useMemo(() => {
    return reverse ? [...movies].reverse() : movies;
  }, [movies, reverse]);

  const loopMovies = [...orderedMovies, ...orderedMovies];

  return (
    <div className="overflow-hidden py-3">
      <div
        className={`flex w-max ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {loopMovies.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
