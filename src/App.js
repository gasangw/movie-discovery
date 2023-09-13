import HomePage from "./Components/HomePage";
import Movies from "./Components/Movies";
import MovieDetails from "./Components/MovieDetails";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=f12569fc3f929239fab0c4a8fa065dda"
        );
        const data = await response.json();
        setMovies([...data.results]);

      } catch(error){
         setErrorMessage(`Unable to fetch movie list due to: ${error}`)
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="App">
      <HomePage />
      <Routes>
         <Route path="/" element={ <Movies movies={movies} errorMessage={errorMessage}/>}/>
         <Route path="/movies/:id" element={<MovieDetails movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
