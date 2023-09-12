import React, { useState, useEffect } from 'react';
import ListOfMovies from './ListOfMovies';

function Movies() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
    useEffect(() => {
      const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f12569fc3f929239fab0c4a8fa065dda')
        const data = await response.json();
        setMovies([...data.results])
      }
      fetchMovies();
    }, [])

    const handleSearch = (e) => {
       setSearch(e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='What movie do you want to watch?' className='flex mx-auto' onChange={handleSearch}/>
       {
        movies && movies.filter(values => values.title.includes(search)).map((movie)=> {
           return (
             <div className='container flex flex-row border-2 border-green-600'>
                <div key={movie.id} className='flex flex-row'>
                   <ListOfMovies  data={movie}/>
                </div>
             </div>
           )
        })
       }
    </div>
  )
}

export default Movies