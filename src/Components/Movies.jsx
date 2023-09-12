import React, { useState, useEffect } from 'react';
import ListOfMovies from './ListOfMovies';

function Movies() {
  const [movies, setMovies] = useState([])
    useEffect(() => {
      const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f12569fc3f929239fab0c4a8fa065dda')
        const data = await response.json();
        setMovies([...data.results])
      }
      fetchMovies();
    }, [])
  return (
    <div>
       {
        movies.map((movie)=> {
            console.log(movie)
           return (
            <div key={movie.id}>
               <ListOfMovies  data={movie}/>
            </div>
           )
        })
       }
    </div>
  )
}

export default Movies