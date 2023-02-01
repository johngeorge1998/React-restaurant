import React, { useEffect } from 'react'
import {useState} from 'react'
import { NavItem } from 'react-bootstrap'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {
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

  

  return (
    <Row>
      {

         
                restaurantlist.map((item)=>(
                  <Restcard restaurant={item}/>
              // <h1>{tem.name}</h1>
        
            ))
        
    
        }
    </Row>
  )
}

export default Restaurantlist