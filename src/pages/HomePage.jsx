import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getTrendingService } from "../services/trendingService";
import { Oval } from "react-loader-spinner";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingService()
      .then((res) => {
        setMovies(res.results);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Shows | Home</title>
      </Helmet>

      <h1>Trending</h1>

      {isLoading && <Oval color="blue" secondaryColor="#242424" />}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
