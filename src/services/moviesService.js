import axios from "axios";

export function searchMoviesService(query, page) {
  return axios
    .get("/search/movie", {
      params: {
        query: query,
        page: page,
      },
    })
    .then((res) => {
      return {
        totalCount: res.data.total_results,
        totalPages: res.data.total_pages,
        results: res.data.results,
        page: res.data.page,
      };
    });
}

export function getMoviesDetails(movieId) {
  return axios.get(`/movie/${movieId}`).then((res) => res.data);
}

export function getMoviesCast(movieId) {
  return axios.get(`movie/${movieId}/credits`).then((res) => res.data.cast);
}

export function getMoviesReviews(movieId) {
  return axios.get(`movie/${movieId}/reviews`).then((res) => res.data.results);
}
