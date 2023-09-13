import tv from '../Images/tv.png';
import menu from '../Images/Menu.png'

function Nav({handleSearch}) {
  return (
    <div className="container">
        <div className='flex justify-between py-3 text-white'>
           <div className='justify-between items-center gap-3 hidden md:flex'>
             <img src={tv} alt="movie-box" />
             <h3 className='text-lg font-semibold'>MovieBox</h3>
           </div>
           <div className='flex justify-between border-2 border-[#D1D5DB] bg-transparent text-white rounded-md w-full md:w-1/2'>
            <input type='text' placeholder='What do you want to watch?' onChange={(e)=>handleSearch(e.target.value)} className='w-full outline-none border-none px-3 py-3 md:py-0 bg-transparent'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-6 flex my-auto cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
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