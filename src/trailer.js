import "./App.js"
import React from 'react';
import { useHistory, useParams } from "react-router";
import ReactStars from "react-rating-stars-component";
import {Button,Card} from 'react-bootstrap';







function Trailer(props){
// console.log(props.match.params.trailerId)
    const {trailerId}=useParams()
    const obj=props.movie.find(el=>el.id ==trailerId)
const history=useHistory()
    return (
      <>
    

<Card>
<Button onClick={()=>history.goBack()}>Go Back </Button>
    <Card.Body>
       <Card.Title>{obj.title}</Card.Title>
       <ReactStars
                    count={5}
                    value={obj.rate}
                    size={24}
                    activeColor="#ffd700"
                    />
       <iframe width="100%" height="500px" src={obj.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
      <Card.Text style={{marginTop:'20px'}}><strong >Description :</strong>{obj.description}</Card.Text>
    </Card.Body>
  </Card> 
   
    
    
 </>
    )
    }
      export default Trailer