import React from 'react'

function ListOfMovies(props) {
    const [poster_path,vote_average, release_date,title] = props.data
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
           <div className='grid text-left rounded-lg'>
              <img src="" alt="" />
           </div>
        </div>
    </div>
  )
}

export default ListOfMovies