import React from "react"
import "./Customer.css"

export const CustomerCard = ({customerProps}) => (
    
    <section className="customer">
        {/* {console.log(customerProps)} */}
        <h3 className ="customer__name">Name: {customerProps.name}</h3>
        <div className="customer__email">Your Email: {customerProps.email}</div>
    </section>
   
)