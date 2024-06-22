import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectMoviesById, updatedMovies } from "./moviesSlice";
import { useState } from "react";

const EditMovies = () => {
  const { movieId } = useParams();

  const movies = useSelector((state) => selectMoviesById(state, movieId));

  const [movieName, setMovieName] = useState(movies.movieName);
  const [movieYear, setMovieYear] = useState(movies.movieYear);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMovieNameChange = (event) => setMovieName(event.target.value);
  const handleMovieYearChange = (event) => setMovieYear(event.target.value);

  const handleEditFormSubmission = (event) => {
    event.preventDefault();
    if (movieName && movieYear) {
      dispatch(
        updatedMovies({
          id: movieId,
          movieName,
          movieYear,
        })
      );
      navigate(`/movies`);
    }
  };
  return (
    <section>
      <h2 className="text-indigo font-bold mt-3">Edit Movies:</h2>
      <form>
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
        <button
          type="submit"
          onClick={handleEditFormSubmission}
          className="addContent-btn"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default EditMovies;
