import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductTypeContext = createContext()

// This component establishes what data can be used.
export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([])
  const [ searchTerms, setSearchTerms ] = useState("")

 
  
  const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
      .then(response => response.json())
      .then(productTypesData => setProductTypes(productTypesData))
  };
  
  const addProduct = product => {
    return fetch("http://localhost:8088/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
};
const getProductById = (id) => {
  return fetch(`http://localhost:8088/products/${id}?_expand=location&_expand=locations`)
    .then(res => res.json())
};



  
  return (
    <ProductTypeContext.Provider value={{
      productTypes: productTypes, 
      getProductTypes: getProductTypes,
      addProduct: addProduct,
      searchTerms: searchTerms,
      setSearchTerms: setSearchTerms,
      setProductTypes: setProductTypes,
      getProductById: getProductById,
   
      
    }}>
      {props.children}
    </ProductTypeContext.Provider>
  )
}
