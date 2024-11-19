import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movieData,idTashuvchi, genre }) {

  const imageUrl = "https://image.tmdb.org/t/p/w500"

  let genres = movieData.genre_ids.map(genreId => genre && genre.genres.find(genre=> genre.id == genreId))
  
  return (
    <Link to='/about'>
    <div className='movie' onClick={()=> idTashuvchi(movieData)}>
      <div className="movie_img">
        <img src={imageUrl + movieData.poster_path} alt="" />
      </div>
      <h4 className='movie_title'>{movieData.title}</h4>
      {genres.map(genre => <span style={{color: 'white'}}>{genre.name}, </span>)}
    </div>
    </Link>
  )
}
export default MovieCard
