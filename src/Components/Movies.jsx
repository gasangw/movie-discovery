import React, { useState, useEffect } from "react";
import ListOfMovies from "./ListOfMovies";
import HomePage from './HomePage'
import Loading from "./Loading";

function Movies({movies, errorMessage}) {
  
  const [search, setSearch] = useState("");
  const [isloading, setIsLoading] = useState(false)
  const [fetchedResults, setFetchedResults] = useState([])

  const handleSearch = (myMovie) => {
    setIsLoading(true)
    setSearch(myMovie);
  };

  useEffect(() => {
    const filteredMovies = movies.filter((values) => values.title.toLowerCase().includes(search.toLowerCase()))
    setFetchedResults([...filteredMovies])
    setIsLoading(false)
  },[movies, search])

return (
    <div>
      <HomePage handleSearch={handleSearch} />
      <div className="container flex justify-between">
        <h3 className="font-bold text-3xl">Featured Movie</h3>
        <div className="flex gap-3 justify-center items-center cursor-pointer">
           <p className="text-red-600">See more</p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
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
