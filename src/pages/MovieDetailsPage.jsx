import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesDetails } from "../services/moviesService";
import { Oval } from "react-loader-spinner";

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMoviesDetails(movieId)
      .then((res) => setMovie(res))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const navigate = useNavigate();

  return (
    <div>
      {isLoading && <Oval color="blue" secondaryColor="#242424" />}
      {movie && (
        <div>
          <button style={{ display: "block" }} onClick={() => navigate(-1)}>
            Go Back
          </button>
          <img
            src={"https://image.tmdb.org/t/p/w300/" + `${movie.poster_path}`}
            alt=""
          />
          <h1>{movie.title}</h1>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <hr />
          <h2>Genres</h2>
          {movie.genres.map((genre) => (
            <span style={{ marginLeft: "20px" }} key={genre}>
              {genre.name}
            </span>
          ))}
        </div>
      )}
      <Link style={{ marginRight: "20px" }} to="cast">
        Cast
      </Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
