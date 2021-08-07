import "./App.js"
import "./style.css"
import React from 'react';
import MovieCard from './movieCard.js';



function MovieList({movie,rating,search}){

    return ( <div className="lmovies">
     { movie.filter(el=>el.rate>=rating && el.title.includes(search)).map(el=>  <MovieCard el={el}/>) }
</div>

)}


          {/*(<div className="movies"> 
          { movie.filter(el=>el.rate>=rating && el.title.includes(search))
          .map((el)=>
        
          <div key={el.id} className="list-movie"  >
               <h5>{el.title} </h5>
               <img src={el.posterURL} alt="film"/>
               <ReactStars
                    count={5}
                    value={el.rate}
                    size={24}
                    activeColor="#ffd700"
                    />
               <p>{el.description}</p> 
          </div>
          )}
           </div>
        

     
     
    )} */}
     

export default  MovieList