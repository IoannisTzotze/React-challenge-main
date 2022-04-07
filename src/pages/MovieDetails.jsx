import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_IMAGE, URL_DETAIL, API_KEY } from "../const";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { data } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`${URL_DETAIL}${data}${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        setMovie(response.data);
      });
  }, []);
  return (
    <div
      className={styles.content}
      style={{
        backgroundImage: "url(" + URL_IMAGE + movie.poster_path + ")",
      }}
      alt="Movie Background"
    >
      <div className={styles.moviesDetails}>
        <img src={URL_IMAGE + movie.poster_path} alt="Movie Poster" />
        <div className={styles.movie__info}>
          <h1>{movie.title}</h1>
          <h4>{movie.tagline}</h4>
          <div className={styles.movie__data}>
            <span className={styles.minutes}>{movie.vote_average}</span>
            <p className={styles.data}>{movie.vote_count}</p>
            <p className={styles.data}>{movie.release_date}</p>
          </div>
          <p className={styles.text}>{movie.overview}</p>
        </div>
        <aside className={styles.movieActions}>
          <div className={styles.action__list}>
            <ul>
              <li>
                <a>
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                  <span>Share</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  <span>Trailer</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                  <span>Download</span>
                </a>
              </li>
              <li>
                <a className={styles.iconModifier}>
                  <i className="fa fa-play" aria-hidden="true"></i>
                  <span>Stream</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MovieDetails;
