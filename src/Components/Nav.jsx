import React from 'react'
import tv from '../Images/tv.png';

function Nav() {
  return (
    <div className="container">
        <div className='flex justify-between'>
           <img src={tv} alt="movie-box" />
           <div className='flex justify-between border-2 border-[#D1D5DB] text-[#D1D5DB] rounded-md'>
            <input type='text' placeholder='What do you want to watch?' />
            <img src="../Images/Icon.svg" alt="search-icon" />
           </div>
        </div>
    </div>
  )
}

export default Nav