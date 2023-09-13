import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import MovieDetails from "./Components/MovieDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
         <Route path="/" element={ <Movies />}/>
         <Route path="/movie/:id" element={<MovieDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
