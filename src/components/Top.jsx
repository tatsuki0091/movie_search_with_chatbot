import React, { useState, useEffect } from "react";
import { fetchMovies } from "../api/movies";
import Movie from "../components/movies/Movie";
import Search from "../components/movies/Search";
import Chatbot from "../components/chatbot/Chatbot";

const Top = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const fetchMoviesData = async () => {
    const data = await fetchMovies();
    if (data.Response === "True") {
      setMovies(data);
      setErrorMessage("");
    } else {
      setErrorMessage(data.Error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchMoviesData();
    setLoading(false);
  }, []);

  return (
    <>
      <h1>Movie Top</h1>
      <h3 className="App-intro">Sharing a few of our favourite movies</h3>
      {/* useStateで定義した関数を子に渡して子から関数を呼べば親の状態も変更することができる。 */}
      <Search setMovies={setMovies} setErrorMessage={setErrorMessage} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.length !== 0 &&
          movies.Search.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
      <Chatbot />
    </>
  );
};

export default Top;
