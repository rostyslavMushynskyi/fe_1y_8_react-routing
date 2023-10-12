import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesCast } from "../services/moviesService";
import { Oval } from "react-loader-spinner";

function CastPage() {
  const { movieId } = useParams();

  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMoviesCast(movieId)
      .then((res) => setCredits(res))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <h3>Cast:</h3>
      {isLoading && <Oval color="blue" secondaryColor="#242424" />}

      <ul>
        {credits.map((actor) => (
          <li key={actor.id}>
            <img
              src={"https://image.tmdb.org/t/p/w200/" + `${actor.profile_path}`}
              alt=""
            />
            <h4>{actor.name}</h4>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CastPage;
