import './App.js';
import React, {useState} from 'react';
import { Modal,Button,Form} from 'react-bootstrap';
import './style.css';

 function AddMovie({movie,setMovie}){
  const [tt, setTt] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [rt, setRt] = useState("");
  
    
const addMovie = () => {
  setMovie([...movie, { id: Math.random(), title:tt,description:desc,posterURL:url ,rate:rt}]);
  setTt("");
  setDesc("");
  setUrl("");
  setRt("");
  handleClose();
};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Go to add movie
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Add a new movie here !</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
         
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" className="m" value={tt} onChange={(e) => setTt(e.target.value)} />
               </Form.Group>

           
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </Form.Group>

          
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>PosterURL</Form.Label>
                    <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
               </Form.Group>

           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text"  value={rt} onChange={(e) => setRt(e.target.value)}/>
               </Form.Group> 

               
          </Form>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
          Add
          </Button>
        </Modal.Footer>
      </Modal> 
</>)
}
export default AddMovie