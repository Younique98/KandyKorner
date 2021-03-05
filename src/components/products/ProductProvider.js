import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductContext = createContext()

// This component establishes what data can be used.
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])
  const [ searchTerms, setSearchTerms ] = useState("")

  const getProducts = () => {
    return fetch("http://localhost:8088/products")
      .then(response => response.json())
      .then(productsData => setProducts(productsData))
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
    return fetch(`http://localhost:8088/products/${id}?_expand=location&_expand=customer`)
      .then(res => res.json())
};
const releaseProduct = product => {
    return fetch("http://localhost:8088/customerCandy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(getProducts)
};

const updateProduct = product => {
  return fetch(`http://localhost:8088/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then(getProducts)
}

  /*
      You return a context provider which has the
      `products` state, `getproducts` function,
      and the `addproduct` function as keys. This
      allows any child elements to access them.
  */
  return (
    <ProductContext.Provider value={{
      products: products, 
      getProducts: getProducts,
      addProduct: addProduct,
      getProductById: getProductById,
      releaseProduct: releaseProduct,
      updateProduct: updateProduct,
      searchTerms: searchTerms,
      setSearchTerms: setSearchTerms
      
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}
