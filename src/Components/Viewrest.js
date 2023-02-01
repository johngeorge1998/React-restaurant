import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { ListGroup } from 'react-bootstrap';
import Restop from './Restop';


function Viewrest() {
    const urlParams=useParams()
    console.log(urlParams.id);
    const [restaurantlist,setRestaurantlist]=useState([])

    //to create a fucnction for API call
    const getRestaurant=async()=>{
        //async await
        await fetch('/restaurants.json') //async call
        .then((data)=>data.json()
            .then((result)=> setRestaurantlist(result.restaurants))
            )

        }
        console.log(restaurantlist);
        
    
    useEffect(()=>{
        getRestaurant()
    },[])

    const viewrest=restaurantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest);

  return (
    <div>
        {
               viewrest?(
               <Row>
                    <Col>
                    <Image src={viewrest.photograph} style={{width:'500px',height:'650px'}} fluid/>
                    </Col>
                    <Col>
                    <ListGroup>
      
      <ListGroup.Item variant="dark">Id :{viewrest.id}</ListGroup.Item>
      <ListGroup.Item  variant="dark">Name :{viewrest.name} </ListGroup.Item>
      <ListGroup.Item  variant="dark">Address :{viewrest.address}</ListGroup.Item>
      <ListGroup.Item  variant="dark">neighborhood :{viewrest.neighborhood}</ListGroup.Item>
      <ListGroup.Item  variant="dark">operating-hours :</ListGroup.Item>
      <ListGroup.Item  variant="dark">reviews:</ListGroup.Item>
    </ListGroup>
                    </Col>
                </Row>
               ):'null'

        }

    </div>
  )
}

export default Viewrest