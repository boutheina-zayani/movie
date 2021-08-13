import "./App.js"
import "./style.css"
import React from 'react';
import MovieCard from './movieCard.js';




function MovieList({movie,rating,search}){

    return ( <div className="lmovies">
     { movie.filter(el=>el.rate>=rating && el.title.includes(search)).map(el=> 
      <MovieCard el={el} />
    ) 
    }
   
</div>

)}


export default  MovieList