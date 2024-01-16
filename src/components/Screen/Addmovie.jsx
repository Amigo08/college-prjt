import React, { useState } from 'react';

import axios from 'axios';

function Addmovie() {
  const [title, setTitle] = useState('');
  const [director , setDirector] =useState('');
 const [genre, setGenre] = useState('');
  const [releasedate, setReleasedate] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [movieImageURL, setmovieImageURL] = useState('');
 
  async function addmovie ()  {
    const newMovie = {
      title,
     director,
      description,
      genre,
      releasedate,
      language,
      movieImageURL,
    };

    console.log(newMovie);

    // You should make an API call to store the book data
    // For example:
    
    try {
        const response = await axios.post('http://localhost:3005/api/movies/addmovie', newMovie);      
          console.log(response.data);
        // Handle success if needed
      } catch (error) {
        console.error(error);
        // Handle error if needed
      }

    // Placeholder for demonstration purposes
    
  };

  return (
    <div className="form-container">
      <div className="column">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br></br>
          <br></br>
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
       
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="releasedate">Release Date:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Release Date"
            value={releasedate}
            onChange={(e) =>  setReleasedate(e.target.value)}
          />
        </div>
      </div>
     
        <div>
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
       
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /><br></br>
        </div>
        <div>
          <label htmlFor="movieImageURL">Cover Image URL:</label>
          <input
            type="text"
            className="input-field"
            placeholder="movie Image URL"
            value={movieImageURL}
            onChange={(e) => setmovieImageURL(e.target.value)}
          />
        </div>
      
       
      <div style={{ textAlign: 'right' }}>
        <button className="button" onClick={addmovie}>
          Add Movie
        </button>
      </div>
    </div>
  );
}

export default Addmovie;