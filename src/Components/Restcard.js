import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    
    <Col className='mt-2' sm={12} md={6} lg={4} xl={3}>
      <Link to={`viewrest/${restaurant.id}`} style={{textDecoration:"none", color:"white"}}>
        <Card>
    <Card.Img className='p-3' variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
       {restaurant.neighborhood}
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  </Col>
  
  )
}

export default Restcard