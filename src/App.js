import './App.css';
import './style.css';
import React, {useState} from 'react';
import MovieList from "./movies.js"
import AddMovie from './add.js'
import Stars from './star.js'
import SearchIt from './search.js'
import Trailer from './trailer';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  const [movie,setMovie]=useState([
    {id:1,trailer:"https://www.youtube.com/embed/KFdHDAIaeBQ",title:"the fault in our stars",description:"Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",posterURL:"https://m.media-amazon.com/images/I/A11auzVbZCL._AC_SY679_.jpg",rate:5},
    {id:2,trailer:"https://www.youtube.com/embed/-AimJlqyLxc",title:"The Call",description:"The Call  is Korean ilm directed by Lee Chung-hyun, starring Park Shin-hye and Jeon Jong-seo. Based on the 2011 British and Puerto Rican film The Caller, The Call revolves around Seo-yeon (Park Shin-hye) and Young-sook (Jeon Jong-seo), two women from different times who connect through a phone call which interchanges their fates. The film is originally to be released theatrically but cancelled due to COVID-19 pandemic.[1] It was released on Netflix globally on November 27, 2020.[1]",posterURL:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Call_poster.jpg/220px-Call_poster.jpg",rate:1},
    {id:3,traielr:"https://www.youtube.com/embed/PHqyFhrb3uU",title:"A Classic Horror Story",description:"A Classic Horror Story est un film d'horreur italien de 2021 écrit par Roberto De Feo, Paolo Strippoli, Lucio Besana, David Bellini et Milo Tissone, et réalisé par Roberto De Feo et Paolo Strippoli.",posterURL:"https://fr.web.img6.acsta.net/pictures/21/06/21/12/39/2290548.jpg",rate:5},
    {id:4,trailer:"https://www.youtube.com/embed/hxaaAoI57fk",title:"Holidate",description:"At parties, two hardened bachelors often find themselves at the children's table or alongside useless boyfriends. Following a chance meeting, they promise to accompany each other over the festive calendar for the months to come. After a year of celebrating, they realize that sharing what they hate can give rise to other feelings.",posterURL:"https://m.media-amazon.com/images/M/MV5BYWVmYTFjODItOTY2Ni00NDhhLTk1ZDYtMzBmOGFhZTMyY2Q0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY1000_SX675_AL_.jpg",rate:3},
    {id:5,traielr:"https://www.youtube.com/embed/fidqR8RlVOY",title:"7. Koğuştaki Mucize",description:"Memo, a mentally handicapped shepherd, lives with his daughter and grandmother in a village on the Turkish Aegean coast. One day his life is turned upside down when the child of the local commander is murdered and Memo is accused of the murder and sentenced to death. Separated from his daughter, the father of the family will have to prove his innocence.",posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZv_NmhKuItl3W2vAwzIFmMmYkYGALHTp-7hbzowTPPTAzn0B",rate:2}
])
 
const [rating,setRating]=useState(0);
const [search,setSearch]=useState("");


  return ( <Router>
   <div className="App">
   <Route exact  path='/' >
      <div className="header"> 
            {/* <div  className="image-header"><img src="./s.png" alt="movie"/></div> */}
            <div className="stars-header"><Stars rating={rating} setRating={setRating} /></div>
            <div className="search-header"><SearchIt setSearch={setSearch}/> </div>
           <AddMovie movie={movie} setMovie={setMovie}/> 
    </div>
       <MovieList movie={movie} setMovie={setMovie} rating={rating} search={search} />
   </Route>
   
    </div> 
   

   
     <Route  path='/trailer/:trailerId' >
     <Trailer movie={movie} />
      </Route>
   
    </Router>
    
  );
}

export default App;
