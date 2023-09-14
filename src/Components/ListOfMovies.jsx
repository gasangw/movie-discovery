import React, {useState} from "react";
import { Link } from "react-router-dom";

function ListOfMovies(props) {
  let color = '#d7dbe0'
  const [myBackgroundColor, setMyBackgroundColor] = useState(color)

  const handleBackgroundColor =()=>{
    let maroon = '#BE123C'
    if(myBackgroundColor === color){
      setMyBackgroundColor(maroon)
    } else{
      setMyBackgroundColor(color)
    }
    
  }


  const { poster_path, release_date, title, id } = props.data;
  return (
    <div className="grid text-left card relative" data-testid="movie-card">
      <div className="absolute right-10 top-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleBackgroundColor} className={`w-6 h-6 bg-[${myBackgroundColor}] rounded-full text-purple-500`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      </div>
      <Link to={`/movies/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        data-testid="movie-poster"
      />
      <h2 data-testid="movie-title" className="text-base font-sans font-bold">
        {title}
      </h2>
      <div className="flex justify-between pt-3">
      <p data-testid="movie-release-date" className="italic">{release_date}</p>
      </div>
      </Link>
    </div>
  );
}

export default ListOfMovies;
