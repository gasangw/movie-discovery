import React from "react";

function ListOfMovies(props) {
  const { poster_path, release_date, title } = props.data;
  return (
    <div className="grid text-left card" data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        data-testid="movie-poster"
      />
      <h2 data-testid="movie-title" className="text-base font-sans font-bold">
        {title}
      </h2>
      <p data-testid="movie-release-date">{release_date}</p>
    </div>
  );
}

export default ListOfMovies;
