import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_KEYWORD = process.env.REACT_APP_MOVIE_KEYWORD;

export const searchMovie = async (keyword) => {
  const res = await axios
    .get(`https://www.omdbapi.com/?s=${keyword};&apikey=${API_KEY}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return [];
    });
  return res.data;
};

export const fetchMovies = async () => {
  const res = await axios
    .get(`https://www.omdbapi.com/?s=${BASE_KEYWORD};&apikey=${API_KEY}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return [];
    });

  return res.data;
};
