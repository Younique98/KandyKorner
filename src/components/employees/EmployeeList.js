import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css";
import { LocationContext } from "../locations/LocationProvider"


export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const {locations, getLocations} = useContext(LocationContext);
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getLocations()
    .then(getEmployees)
  }, []);

  return (
    <>
      <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        
        {
        employees.map(employee => {
          {console.log(employee)}
          const location = locations.find(locationOfEmployee => locationOfEmployee.id === employee.locationId)
          {console.log(location)}
          return <EmployeeCard key={employee.id} employeeProps={employee} location={location}/>;
        })
        }
      </div>
    </>
  );
};
