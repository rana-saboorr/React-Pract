import React from "react";


// Remove duplicate values in inout list
export const getUniqueMovies = (movieArray) => {
  return [
    ...new Map(
      movieArray.map((m) => [m.toLowerCase(), m])
    ).values(),
  ];
};

// Validate movies in api and not in user already list
export const validateMovies = (inputMovies, allMovies, existingMovies) => {
  const errors = [];
  const moviesToAdd = [];

  inputMovies.forEach((name) => {
    const foundMovie = allMovies.find(
      (m) => m.title.toLowerCase() === name.toLowerCase()
    );

    if (!foundMovie) {
      errors.push(`${name} , Movie not found`);
      return;
    }

    const alreadyExists = existingMovies.some(
      (m) => m.toLowerCase() === foundMovie.title.toLowerCase()
    );

    if (alreadyExists) {
      errors.push(`${name} , Already in search list`);
      return;
    }

    moviesToAdd.push(foundMovie.title);
  });

  return { errors, moviesToAdd };
};

// Update localStorage
export const updateUserMovies = (user, moviesToAdd) => {
  const updatedNames = [...(user.movies || []), ...moviesToAdd];

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((u) =>
    u.email === user.email ? { ...u, movies: updatedNames } : u
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  const updatedUser = { ...user, movies: updatedNames };
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));

  return updatedUser;
};
