import React from 'react'
import Config from "../config/Config"
function MovieCard({ movie }) {
  return (
    <div className="min-w-[150px] m-2 bg-gray-800 text-white p-2 rounded">
      <img
        src={`${Config.moviePosterUrl}${movie.poster_path}`}
        alt={movie.title}
      />
      <p className="text-sm mt-2">{movie.title}</p>
    </div>
  );
}

export default MovieCard;
