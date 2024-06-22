/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { selectAllMovies, deletedMovies } from "./moviesSlice";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const movies = useSelector(selectAllMovies);

  const dispatch = useDispatch();

  const moviesLists = movies.map((movie) => (
    <article key={movie.id}>
      <p>
        {movie.movieName} was released in {movie.movieYear}
      </p>
      <Link to={`/movies/${movie.id}`} className="addContent-btn">
        View
      </Link>
      <button
        onClick={() => dispatch(deletedMovies({ id: movie.id }))}
        className="addContent-btn"
      >
        Delete
      </button>
    </article>
  ));

  return <section>{moviesLists}</section>;
};

export default MoviesList;
