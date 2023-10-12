import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { searchMoviesService } from "../services/moviesService";
import Searchbar from "../components/Searchbar";
import { Oval } from "react-loader-spinner";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
    page: 1,
  });
  const [currentPage, setCurrentPage] = useState(searchParams.get("page"));
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    searchMoviesService(searchParams.get("query"), currentPage)
      .then((res) => {
        setMovies(res.results);
        setTotalPages(res.totalPages);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams, currentPage]);

  function handleSearch(newQuery) {
    setSearchParams({
      query: newQuery,
      page: searchParams.get("page"),
    });
  }

  function handlePageChange({ selected }) {
    setCurrentPage(selected + 1);
    setSearchParams({
      query: searchParams.get("query"),
      page: selected + 1,
    });
    searchMoviesService(searchParams.get("query"), +selected + 1).then(
      (res) => {
        setMovies(res.results);
      }
    );
  }

  return (
    <div>
      {isLoading && <Oval color="blue" secondaryColor="#242424" />}

      <Searchbar
        onSearch={handleSearch}
        defaultValue={searchParams.get("query")}
      />

      {movies.length ? (
        <div>
          <p>Search results for: {searchParams.get("query")}</p>

          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>

          <ReactPaginate
            initialPage={currentPage - 1}
            pageCount={totalPages}
            onPageChange={handlePageChange}
            previousLabel={null}
            nextLabel={null}
          />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default MoviesPage;
