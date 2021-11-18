
import React, { useState,useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api.js'
import { Link } from 'react-router-dom'
import './StarshipList.css'

const StarshipList = (props) => {
    const [results,setStarships] = useState([])

    useEffect(() => {
        getAllStarships()
        .then(starshipData => setStarships(starshipData.results))
    },[])

    return(
        <>
        {results.length ? 
          <>
            <div>
              <h3>Starship List</h3>
              <div className="icon-container">
                {results.map(starship =>
                  <Link to="/starship-details" state={{ starship }} key={starship.index}>
                    <div id="starshipDiv">
                      
                      {starship.name}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </>
          :
          <h2>Loading...</h2>
        }
      </>

    )

}

export default StarshipList