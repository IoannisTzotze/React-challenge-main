import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { API_KEY } from "../const";

export const Page1 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular${API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  const cards = movies.map((movie) => <Card movie={movie} key={movie.id} />);

  return (
    <>
      <div className="App">{cards}</div>
    </>
  );
};

export default Page1;
