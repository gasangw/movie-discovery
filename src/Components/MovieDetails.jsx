import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function MovieDetails({movies}) {
  const Id = useParams()
  const moveClickedOn = movies.find((movie) => movie.id+'' === Id.id)
  const {title, overview, popularity, release_date} = moveClickedOn
  return (
    <div className='container'>
        <div className='py-1 px-3 rounded-md bg-green-600 w-fit flex justify-center items-center'>
          <Link to='/' className='text-white text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </Link> 
        </div>
        <div className='text-left bg-zinc-300 py-10 mt-8 px-4 space-y-3'>
            <h1 className='text-lg font-medium'><span className='font-bold'>Title:  </span>{title}</h1>
            <h3 className='text-base'><span className='font-bold'>Overview:  </span>{overview}</h3>
            <p className='text-base'><span className='font-bold'>Runtime:  </span>{popularity}</p>
            <p className='italic font-normal'><span className='font-bold'>Release Date:  </span>{release_date}</p>
        </div>
    </div>
  )
}

export default MovieDetails