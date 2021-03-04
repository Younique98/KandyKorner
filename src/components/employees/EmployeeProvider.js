import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees?__expand=locations")
      .then(response => response.json())
      .then(employeesData => setEmployees(employeesData))
  }

  /*
      You return a context provider which has the
      `employees` state, `getemployees` function,
      and the `addemployee` function as keys. This
      allows any child elements to access them.
  */
  return (
    <EmployeeContext.Provider value={{
      employees: employees, 
      getEmployees: getEmployees
      
    }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}
