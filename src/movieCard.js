import "./App.js"
import "./style.css"
import ReactStars from "react-rating-stars-component";
import {Card,Button} from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";




function MovieCard({el}){
    
    return (
        
      <Card key={el.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <ReactStars
                    count={5}
                    value={el.rate}
                    size={24}
                    activeColor="#ffd700"
                    />
          <Button onClick={(e) => e.preventDefault()}
            >
              <Link className="text-light" to={`/trailer/${el.id}`}>
                TRAILER
              </Link></Button>
        </Card.Body>
        
      </Card>
  

  
    ) 
     
}
export default  MovieCard;