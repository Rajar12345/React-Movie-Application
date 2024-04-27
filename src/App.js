import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from "./components/no-movie";
import Navbar from "./components/navbar";// Importing Navbar component
import Footer from './components/footer';
function App() {

  const API_URL = "https://api.themoviedb.org/3";
  const BACKGROUND_IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
  const API_KEY = "164db106f577d2da6ec7abe50d42ed00";
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const fetchMovies = async (searchKey, category) => {
    let url;
    if (category === 'trending') {
      url = `${API_URL}/trending/movie/day?api_key=${API_KEY}`;
    } else if (category === 'top_rated') {
      url = `${API_URL}/movie/top_rated?api_key=${API_KEY}`;
    } else if (category === 'popular') {
      url = `${API_URL}/movie/popular?api_key=${API_KEY}`;
    } else if (category === 'upcoming') {
      url = `${API_URL}/movie/upcoming?api_key=${API_KEY}`;
    } else if (category === 'now_playing') {
      url = `${API_URL}/movie/now_playing?api_key=${API_KEY}`;
    } else {
      const type = searchKey ? "search" : "discover";
      url = `${API_URL}/${type}/movie`;
    }
    const { data: { results } } = await axios.get(url, {
      params: {
        api_key: API_KEY,
        query: searchKey
      }
    });
    setMovies(results);
  };

  useEffect(() =>{
    fetchMovies(searchKey, selectedGenre);
  }, [searchKey, selectedGenre]);

  const renderMovies = () => (
    movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        selectMovie={setSelectedMovie}
      />
    ))
  );
 
  const searchMovies = (e) =>{
    e.preventDefault();
    fetchMovies(searchKey);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="App">
      <Navbar handleGenreClick={handleGenreClick} /> {/* Rendering Navbar component */}
      <div className={"info"}  style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)) ,url(${BACKGROUND_IMAGE_PATH}${selectedMovie.backdrop_path})`}}>
        <header>
          <p className={"title"}>Great Movies Hub</p>
          <form onSubmit={searchMovies}>
            <input type={"text"} placeholder='Search Movies ...' onChange={(e) => setSearchKey(e.target.value)} />
          </form>
        </header>
        <div className={"info-content"}>
          <h1>{selectedMovie.title}</h1>
          {selectedMovie.overview ? <p>{selectedMovie.overview}</p> : null}
        </div>
      </div>
      <div className="container">
        {renderMovies()}
      </div>
      <footer>
        <Footer />
      

      </footer>
    </div>
  );
}

export default App;
