import React, { useState, useEffect } from "react";
import ListOfMovies from "./ListOfMovies";
import Loading from "./Loading";

function Movies({movies, errorMessage}) {
  
  const [search, setSearch] = useState("");
  const [isloading, setIsLoading] = useState(false)
  const [fetchedResults, setFetchedResults] = useState([])

  const handleSearch = (e) => {
    setIsLoading(true)
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredMovies = movies.filter((values) => values.title.toLowerCase().includes(search.toLowerCase()))
    setFetchedResults([...filteredMovies])
    setIsLoading(false)
  },[movies, search])
console.log(fetchedResults)
return (
    <div>
      <input
        type="text"
        placeholder="What movie do you want to watch?"
        className="flex mx-auto"
        onChange={handleSearch}
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {isloading ? <Loading/> : (fetchedResults.map((movie) => (
            <div key={movie.id} className="flex flex-row">
              <ListOfMovies data={movie} />
            </div>
        )))}
      </div>
    </div>
  );
}

export default Movies;
