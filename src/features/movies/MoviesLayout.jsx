import MoviesForm from "./MoviesForm";
import MoviesList from "./MoviesList";

const MoviesLayout = () => {
  return (
    <section>
      <MoviesForm />
      <MoviesList />
    </section>
  );
};

export default MoviesLayout;
