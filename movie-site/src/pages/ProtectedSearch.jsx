import React, { useState, useEffect, useMemo } from "react";
import { Logo, Button, Input } from "../Components/index";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import useApiData from "../Components/Api/ApiData";
import MovieCard from "../Components/MovieCard";

import {
  getUniqueMovies,
  validateMovies,
  updateUserMovies,
} from "../Components/utils/movieHelper";

function ProtectedSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const currentUser = useSelector((state) => state.auth.userData);
  const { data: allMovies, loading } = useApiData();

  const [movieNames, setMovieNames] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!currentUser) navigate("/");
    else setMovieNames(currentUser.movies || []);
  }, [currentUser, navigate]);

  const onSubmit = (formData) => {
    if (!formData.movie || !allMovies) return;

    setErrors([]);

    const inputMovies = formData.movie
      .split(",")
      .map((m) => m.trim())
      .filter((m) => m.length > 0);

    const uniqueMovies = getUniqueMovies(inputMovies);

    const latestUser = JSON.parse(localStorage.getItem("currentUser"));
    const existingMovies = latestUser?.movies || [];

    const { errors: validationErrors, moviesToAdd } = validateMovies(
      uniqueMovies,
      allMovies,
      existingMovies
    );

    if (moviesToAdd.length > 0) {
      const updatedUser = updateUserMovies(latestUser, moviesToAdd);

      dispatch(authLogin({ userData: updatedUser }));
      setMovieNames(updatedUser.movies);
    }

    setErrors(validationErrors);
    reset({ movie: "" });
  };

  const matchedMovies = useMemo(() => {
    if (!allMovies) return [];

    return movieNames
      .map((name) =>
        allMovies.find(
          (m) => m.title.toLowerCase() === name.toLowerCase()
        )
      )
      .filter(Boolean);
  }, [movieNames, allMovies]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 p-6">
      <div className="mb-6 flex justify-center">
        <Logo width="120px" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-gray-300 p-6 shadow-md"
      >
        <h2 className="text-center text-xl font-bold mb-4 text-gray-800">
          Search Your Favorite Movies
        </h2>

        <Input
          label="Enter Movie Names:"
          placeholder="e.g., Avatar, Prey, Play Dirty"
          type="text"
          {...register("movie", { required: true })}
        />

        {errors.length > 0 && (
          <div className="mt-2">
            {errors.map((err, index) => (
              <p key={index} className="text-red-600 text-sm">
                {err}
              </p>
            ))}
          </div>
        )}

        <Button type="submit" className="w-full mt-4">
          Add Movies
        </Button>
      </form>

      {loading ? (
        <p className="text-white mt-6">Loading movies...</p>
      ) : matchedMovies.length > 0 ? (
        <div className="mt-8 w-full max-w-5xl flex flex-wrap justify-center">
          {matchedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : null}
    </div>
  );
}


export default ProtectedSearch;
