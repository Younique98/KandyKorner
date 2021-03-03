import React from "react"
import "./Location.css"


export const LocationCard = ({locationProps}) => (
    
    <section className="location">
        { console.log(locationProps) }
        <h3 className="location__name">Name: {locationProps.name}</h3>
        <div className="location__address">Address: {locationProps.address}</div>
        <div className="location__squareFootage">Square footage: {locationProps.squareFootage}</div>
        <div className="location__handicapAccessible">Is this location Handicap Accessible? {locationProps.handicapAccessible}</div>
    </section>
)