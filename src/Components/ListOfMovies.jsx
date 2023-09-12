import React from 'react'

function ListOfMovies(props) {
    const { backdrop_path,
        release_date,title} = props.data
       // {backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`}
  return (
    <div className='container'>
        <div>
           <div className='grid text-left card' data-testid="movie-card">
              <img src={`'https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title} data-testid="movie-poster"/>
              <h2 data-testid="movie-title">{title}</h2>
              <p data-testid="movie-release-date">{release_date}</p>
           </div>
        </div>
    </div>
  )
}

export default ListOfMovies