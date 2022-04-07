import React from "react";
import styles from "./Card.module.css";

import { URL_IMAGE } from "../const";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { movie } = props;
  return (
    <div>
      <div className={styles.movie__card}>
        <div className={styles.info__section}>
          <div className={styles.movie__header}>
            <img
              className={styles.movie__image}
              src={URL_IMAGE + movie.poster_path}
              alt="Movie Poster"
            />
            <h1>{movie.title}</h1>
            <h4>{movie.release_date.substr(0, 4)}</h4>
            <span className={styles.minutes}>{movie.vote_average}</span>
            <p className={styles.type}>{movie.vote_count}</p>
          </div>
          <div className={styles.movie__desc}>
            <p className={styles.text}>{movie.overview.substr(0, 100)}...</p>
          </div>
          <div className={styles.movie__social}>
            <Link
              className={styles.movie__btn}
              to={{
                pathname: "/moviedetails/" + movie.id,
              }}
            >
              Details
            </Link>
          </div>
        </div>
        <div
          className={styles.back}
          style={{
            backgroundImage: "url(" + URL_IMAGE + movie.poster_path + ")",
          }}
          alt="Movie Background"
        ></div>
      </div>
    </div>
  );
};

export default Card;
