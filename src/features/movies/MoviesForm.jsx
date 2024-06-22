import { useState } from "react";
import { useDispatch } from "react-redux";
import { madeMovies } from "./moviesSlice";

const MoviesForm = () => {
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");

  const dispatch = useDispatch();

  const handleMovieNameChange = (event) => setMovieName(event.target.value);
  const handleMovieYearChange = (event) => setMovieYear(event.target.value);

  const createNewMovies = (event) => {
    event.preventDefault();
    if (movieName && movieYear) {
      dispatch(madeMovies(movieName, movieYear));
    }
    setMovieName("");
    setMovieYear("");
  };

  return (
    <section>
      <form onSubmit={createNewMovies}>
        <div id="movieName">
          <label htmlFor="movieName" className="text-indigo font-bold">
            Enter movie name:
          </label>
          <input
            type="text"
            id="movieName"
            value={movieName}
            onChange={handleMovieNameChange}
            className="border-2 border-slate-500 pl-1 rounded focus:outline-indigo-500/50"
          />
        </div>

        <div id="movieYear">
          <label htmlFor="movieYear" className="text-indigo font-bold">
            Enter the year released:
          </label>
          <input
            type="text"
            id="movieYear"
            value={movieYear}
            onChange={handleMovieYearChange}
            className="border-2 border-slate-500 pl-1 rounded focus:outline-indigo-500/50"
          />
        </div>
        <button type="submit" className="addContent-btn">
          Add Movie
        </button>
      </form>
    </section>
  );
};

export default MoviesForm;
