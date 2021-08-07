import "./App.js"
import "./style.css"
import ReactStars from "react-rating-stars-component";
import {Card,Row,Col} from 'react-bootstrap';
import React from 'react';




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
          <Card.Text>{el.description} </Card.Text>
        </Card.Body>
      </Card>
  

    //     <div  className="cardy"
    //            key={el.id} >
    //            <h5>{el.title} </h5>
    //            <img src={el.posterURL} alt="film"/>
    //            <ReactStars
    //                 count={5}
    //                 value={el.rate}
    //                 size={24}
    //                 activeColor="#ffd700"
    //                 />
    //            <p>{el.description}</p>  
    //  </div>
    ) 
     
}
export default  MovieCard;