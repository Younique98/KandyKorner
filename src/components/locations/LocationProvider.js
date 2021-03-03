import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
      .then(response => response.json())
      .then(locationsData => setLocations(locationsData))
      
  }

  return (
    <LocationContext.Provider value={{
      locations: locations, 
      getLocations: getLocations
      // locations, getlocations
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}
