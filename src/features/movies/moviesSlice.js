import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    madeMovies: {
      reducer(state, action) {
        state.movies.push(action.payload);
      },
      prepare(movieName, movieYear) {
        return {
          payload: {
            id: nanoid(),
            movieName,
            movieYear,
          },
        };
      },
    },
    updatedMovies(state, action) {
      const { id, movieName, movieYear } = action.payload;
      const existingMovies = state.movies.find((movie) => movie.id === id);
      if (existingMovies) {
        existingMovies.movieName = movieName;
        existingMovies.movieYear = movieYear;
      }
    },
    deletedMovies(state, action) {
      const { id } = action.payload;
      const updatedMoviesList = state.movies.filter((movie) => movie.id !== id);
      state.movies = updatedMoviesList;
    },
  },
});

export const selectMoviesById = (state, movieId) =>
  state.movies.movies.find((movie) => movie.id === movieId);

export const selectAllMovies = (state) => state.movies.movies;

export const { madeMovies, updatedMovies, deletedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
