import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesReviews } from "../services/moviesService";
import { Oval } from "react-loader-spinner";

function ReviewsPage() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMoviesReviews(movieId)
      .then((res) => setReviews(res))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <h3>Reviews:</h3>
      {isLoading && <Oval color="blue" secondaryColor="#242424" />}

      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
}

export default ReviewsPage;
