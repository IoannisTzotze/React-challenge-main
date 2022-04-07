import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { URL_DETAIL, API_KEY } from "../const";

export const Page2 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=1`)
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

export default Page2;
