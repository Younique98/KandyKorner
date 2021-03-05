import React, { useEffect, useContext, useState } from "react"
import "./Product.css"
import { Link } from "react-router-dom"
import { useHistory, useParams } from "react-router-dom"
import {ProductContext} from "./ProductProvider"

export const ProductCard = ({productProps, productType}) => {
  const { getProductById, releaseProduct } = useContext(ProductContext)
  const [product, setProduct] = useState({})
  const history = useHistory();
  const {productId} = useParams();
  
  const addToCart = () => {
    
      releaseProduct(product.id)
        .then(() => {
          history.push("/customerCandy")
        })
    }
    useEffect(() => {
      console.log("useEffect", productId)
      getProductById(productId)
      .then((response) => {
        setProduct(response)
      })
      }, [])
  
        return (
      <section className="product">
        {console.log(productType)}
        <h3 className ="product__name">Name: {productProps.productName}
        <Link to={`/product/detail/${productProps.id}`}>
          { productProps.name }
        </Link>
        </h3>
        <div className="product__price">Price: {productProps.price}</div>
        {/* <div className="product__productType">ProductType: {productType.type}</div> */}
        <button className="product__purchaseButton" onClick={addToCart}>Purchase</button>
        <button onClick={() => {
     history.push(`/products/edit/${product.id}`)
            }}>Add</button>
    </section>
   
)}