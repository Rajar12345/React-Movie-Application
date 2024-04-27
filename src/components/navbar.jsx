import React from 'react';
import './navbar.css'; // Importing navbar.css for styling

function Navbar({ handleGenreClick }) {
  const genres = ['trending', 'top_rated', 'popular', 'upcoming', 'now_playing'];

  return (
    <nav>
      <ul>
        {genres.map(genre => (
          <li key={genre} onClick={() => handleGenreClick(genre)}>
            {genre}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
