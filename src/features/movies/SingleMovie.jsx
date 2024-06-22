import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectMoviesById } from "./moviesSlice";

const SingleMovie = () => {
  const { movieId } = useParams();

  const movies = useSelector((state) => selectMoviesById(state, movieId));

  if (!movies) {
    return (
      <section>
        <h2>Page not found</h2>
      </section>
    );
  }

  return (
    <section>
      <p>
        {movies.movieName} was released in {movies.movieYear}
      </p>
      <Link to={`/movies/edit/${movies.id}`} className="addContent-btn">
        Edit
      </Link>
      <br />
    </section>
  );
};

export default SingleMovie;
