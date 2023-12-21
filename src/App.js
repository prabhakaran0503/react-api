import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';


function App() {
  const [photos,setphotos]=useState([]) //array usestate pass 

  useEffect(()=>{
  //  fetch("https://api.tvmaze.com/shows/1/episodes")
  //  .then((res)=>{
  //    return res.json()
  //  })
  //  .then((data)=>setphotos(data))
    
   
    axios.get("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>
  setphotos(res.data)
    )

},[])
  

  return (
   
     <div className='card-sec'>
       <Banner />
      
         <Container className='c'  >
        <h1 className='mt-5 mb-5'>Movie List</h1>
     <Row className='card-row'>
     
     {
      photos.map((photo)=>(
     
        
        
          <Col className='card-col' >
        <Card style={{ width: '18rem' }}  className='card'>
          <Card.Img variant="top" src={photo.image.medium} />
          <Card.Body>
            <Card.Title>{photo.name}</Card.Title>
            <Card.Text>
              <p>Rating:{photo.rating.average}</p>
              <p>{photo.season}</p>
              <p>{photo.airdate}</p>
            </Card.Text>
        <Button variant="primary" className='card-btn'>Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
         
        
      
    
      ))
     }
       </Row>
    </Container>
    </div>
  );
}

export default App;
