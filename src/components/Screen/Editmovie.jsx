import React, { useEffect, useState } from 'react';
import { Input, Button, Select } from 'antd';
import axios from 'axios';



const { Option } = Select;

function Editmovie({ movieid }) {
  const [loader, setLoader] = useState(false);
  const [movieDetails, setMovieDetails] = useState({
    title: '',
    director: '',
     description: '',
     genre: '',
     releasedate: '',
     language: '',
     movieImageURL: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3005/api/movie/getmoviebyid', {
  movieid: movieid, // Adjust the payload based on your API endpoint requirements
});

        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchData();
  }, [movieid]);

  const handleUpdateMovies = async () => {
    try {
      setLoader(true);

      const response = await axios.put('http://localhost:3005/api/movies/updatemovie/' + movieid, {
        ...movieDetails,
      });
      
      console.log(response.data);
      setLoader(false);
     alert("Updated succesfully").then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
      setLoader(false);
      // Handle error
    }
  };

  const handleInputChange = (e, key) => {
    setMovieDetails({
      ...movieDetails,
      [key]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Edit movie</h2>
      <label>Title:</label>
      <Input
        placeholder='Movie Title'
        value={movieDetails.title}
        onChange={(e) => handleInputChange(e, 'title')}
      />

      <label>director:</label>
      <Input
        placeholder='Director'
        value={movieDetails.director}
        onChange={(e) => handleInputChange(e, 'director')}
      />

      <label>Genre:</label>
      <Input
        placeholder='Genre'
        value={movieDetails.genre}
        onChange={(e) => handleInputChange(e, 'genre')}
      />

      <label> Releasedate:</label>
      <Input
        placeholder='releasedate'
        value={movieDetails.releasedate}
        onChange={(e) => handleInputChange(e, 'releasedate')}
      />

      <label>Language:</label>
      <Input
        placeholder='Language'
        value={movieDetails.language}
        onChange={(e) => handleInputChange(e, 'language')}
      />

     <label>Description:</label>
      <Input
        placeholder='Description'
        value={movieDetails.description}
        onChange={(e) => handleInputChange(e, 'description')}
      />

      <Button type='primary' className='mt-3' onClick={handleUpdateMovies}>
        Update Movie
      </Button>
      {loader}
    </div>
  );
}

export default Editmovie;
