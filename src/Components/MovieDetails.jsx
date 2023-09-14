import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function MovieDetails({movies}) {
  const Id = useParams()
  const moveClickedOn = movies.find((movie) => movie.id+'' === Id.id)
  const {title,poster_path, overview, popularity, release_date} = moveClickedOn
  const date = new Date(release_date).toUTCString()
  return (
    <div className='container py-10'>
        <div className='py-1 px-3 rounded-md bg-green-600 w-fit flex justify-center items-center'>
          <Link to='/' className='text-white text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </Link> 
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-zinc-300 py-10 mt-8 px-4 gap-5'>
           <div>
           <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              data-testid="movie-poster"
              className='w-full h-96'
            />
           </div>
           <div>
           <h1 className='text-lg font-medium' data-testid="movie-title">{title}</h1>
            <h3 className='text-base' data-testid="movie-overview">{overview}</h3>
            <p className='text-base' data-testid="movie-runtime">{popularity}</p>
            <p className='italic font-normal' data-testid="movie-release-date">{date}</p>
        </div>
           </div>
    </div>
  )
}

export default MovieDetails