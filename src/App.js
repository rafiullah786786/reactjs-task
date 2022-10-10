import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/movies/Movies";
import axios from "axios";
import Loader from "./components/loader/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/error/Error";
import Movie from "./components/movie/Movie";
import Search from "./components/searchfilter/Search";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetch("https://movie-task.vercel.app/api/popular?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.data.results);
        setloading(false);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Search />
        {loading && <Loader />}

        <Routes>
          <Route path="/" element={<Movies data={movies} />} />
          <Route path="/movie/:pid" element={<Movie />} />
          {!loading && <Route path="*" element={<Error />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
