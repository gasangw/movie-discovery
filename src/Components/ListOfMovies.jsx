import React from "react";
import { Link } from "react-router-dom";

function ListOfMovies(props) {
  const { poster_path, release_date, title, id } = props.data;
  return (
    <div className="grid text-left card" data-testid="movie-card">
      <Link to={`/movies/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        data-testid="movie-poster"
      />
      <h2 data-testid="movie-title" className="text-base font-sans font-bold">
        {title}
      </h2>
      <p data-testid="movie-release-date">{release_date}</p>
      </Link>
    </div>
  );
}

export default ListOfMovies;
