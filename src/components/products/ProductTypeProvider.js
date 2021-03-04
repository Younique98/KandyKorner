import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductTypeContext = createContext()

// This component establishes what data can be used.
export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([])

  const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
      .then(response => response.json())
      .then(productTypesData => setProductTypes(productTypesData))
  }

  /*
      You return a context provider which has the
      `productTypes` state, `getproductTypes` function,
      and the `addproductType` function as keys. This
      allows any child elements to access them.
  */
  return (
    <ProductTypeContext.Provider value={{
      productTypes: productTypes, 
      getProductTypes: getProductTypes
      
    }}>
      {props.children}
    </ProductTypeContext.Provider>
  )
}
