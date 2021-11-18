import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {getStarshipDetails} from '../../services/sw-api.js'


const StarshipDetails = (props) => {

    const [shipDetails, setShipDetails] = useState({})
    const location = useLocation()

    useEffect(() => {
        getStarshipDetails(location.state.starship.url)
        .then(shipDetailsFromApi => setShipDetails(shipDetailsFromApi))
    },[])

    return(
        <>
      <div>
        {/* Look at this sweet ternary! */}
        {/* This is a great way to render a 'loading' page! */}
        {shipDetails.name ?
        <>
          {/* Gotta have the random cat pics... */}
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <h2>Name: {shipDetails.name}</h2>
          <div>Model {shipDetails.model}</div>
          <a href="/starship-list">Return To List</a>
        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
    </>
    )

}

export default StarshipDetails