import React from 'react';

const movies = [
  {
    id: 1,
    title: 'salar',
    synopsis: 'A thief who enters the dreams of others to steal secrets from their subconscious.',
    genre: 'Sci-Fi, Action',
    ratings: '8.8/10',
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: 'Drama',
    ratings: '9.3/10',
  },
  // Add more movie objects as needed
];

const MovieListing = () => {
  return (
    <div className="movie-listing">
      <h2>Available Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Ratings:</strong> {movie.ratings}</p>
            <p><strong>Synopsis:</strong> {movie.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListing;
