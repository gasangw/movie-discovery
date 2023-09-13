import React from 'react'
import tv from '../Images/tv.png';
import menu from '../Images/Menu.png'

function Nav() {
  return (
    <div className="container">
        <div className='flex justify-between py-3 text-white'>
           <div className='justify-between items-center gap-3 hidden md:flex'>
             <img src={tv} alt="movie-box" />
             <h3 className='text-lg font-semibold'>MovieBox</h3>
           </div>
           <div className='flex justify-between border-2 border-[#D1D5DB] bg-transparent text-white rounded-md w-full md:w-1/2'>
            <input type='text' placeholder='What do you want to watch?' className='w-full outline-none border-none px-3 py-3 md:py-0 bg-transparent'/>
           </div>
           <div className='gap-2 w-32 justify-center items-center hidden md:flex'>
            <p className='text-base font-semibold'>Sign In</p>
             <img src={menu} alt="menue" />
           </div>
        </div>
    </div>
  )
}

export default Nav