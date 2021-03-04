import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employeeProps, location}) => (
    <section className="employee">
        {console.log(location)}
        <h3 className ="employee__name">Name: {employeeProps.name}</h3>
        <div className="employee__located">Location: {location.name}</div>
        <div className="employee__manager">Manager Position: {employeeProps.manager}</div>
        <div className="employee__fullTime">Full Time Employee: {employeeProps.fullTime}</div>
        <div className="employee__hourlyRate">Hourly Rate Paid: {employeeProps.hourlyRate}</div>
        
    </section>
)

// -- Reminder link location and pass through at employeeLocation from database
