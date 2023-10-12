import axios from "axios";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGRiODJiNjA5ZjA5MWQ0ODllOGE5ZDk0ZTFmNTkyYiIsInN1YiI6IjY1MTMxNWVhMjZkYWMxMDBlYjFiZTIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dp4QBHNzqn9J2y_-nSbkdY8W5czU1aJoyE0LgWtuF7g";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.authorization = `Bearer ${apiKey}`;
