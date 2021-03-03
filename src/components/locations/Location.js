import React from "react"

import { Link } from "react-router-dom"
import "../locations/Location.css"



export const LocationCard = ({ locationProps }) => (
  
    <section className="locationProps">
        <h3 className="location__name">
          <Link to={`/locations/detail/${locationProps.id}`}>
            { locationProps.name }
          </Link>
        </h3>
        <div className="location__breed">{ locationProps.breed }</div>
    </section>
    
)