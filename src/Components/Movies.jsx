import React, { useState, useEffect } from "react";
import ListOfMovies from "./ListOfMovies";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=f12569fc3f929239fab0c4a8fa065dda"
        );
        const data = await response.json();
        setMovies([...data.results]);
      } catch(error){
         setErrorMessage(`"Unable to fetch movie list due to: ${error}`)
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const renderMovies = (
    <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
      {movies &&
      movies
        .filter((values) =>
          values.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie) => {
          return (
            <div key={movie.id} className="flex flex-row">
              <ListOfMovies data={movie} />
            </div>
          );
        })}
    </div>
  )
  return (
    <div>
      <input
        type="text"
        placeholder="What movie do you want to watch?"
        className="flex mx-auto"
        onChange={handleSearch}
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}

export default Movies;
