import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import {ProductTypeContext} from "./ProductTypeProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"
import { useHistory } from "react-router-dom"

export const ProductList = () => {
  const { products, getProducts, searchTerms } = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductTypeContext);
    {console.log(productTypes)}
  // Since you are no longer ALWAYS displaying all of the products
  const [ filteredProducts, setFiltered ] = useState([])
  const history = useHistory()

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getProductTypes()
      .then(getProducts)
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching products
      const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all products
      setFiltered(products)
    }
  }, [searchTerms, products])

  return (
    <>
      <h1>Products</h1>

      <button onClick={() => history.push("/products/create")}>
          Online Pickup
      </button>
      <div className="products">
      {
        filteredProducts.map(product => {
            // const productType = productTypes.find(productType => productType.id === product.productTypeId)
          {console.log(productType)}
            return <ProductCard key={product.id} productProps={product} productType = {productTypes.find(productType => productType.id === product.productTypeId)} />
        })
      }
      </div>
    </>
  )
}