import React from 'react'
import Nav from './Nav'
import imageURL from '../Images/Poster.svg'

function HomePage(props) {
  return (
    <div style={{backgroundImage: `url(${imageURL})`}} className='mb-8 bg-cover bg-no-repeat pb-4'>
       <Nav handleSearch={props.handleSearch} />
       <div className='container text-white text-left'>
         <h1 className='text-4xl font-semibold mt-14 py-3'>John Wick 3 :<br/> Parabellum</h1>
         <p className='text-lg w-1/3'>John Wick is on the run after killing a member 
         of the international assassins' guild, and with a $14 million price tag on his head,
         he is the target of hit men and women everywhere.</p>

         <div className='flex gap-3 rounded-md bg-[#BE123C] text-white py-3 px-5 w-fit justify-center items-center my-4 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
          <p className='text-base font-medium capitalize'>Watch trailer</p>
         </div>
       </div>
    </div>
  )
}

export default HomePage