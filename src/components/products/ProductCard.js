import React from "react"
import "./Product.css"
import { Link } from "react-router-dom"

export const ProductCard = ({productProps, productType}) => (
    
    <section className="product">
        {/* {console.log(productProps, productType)} */}
        <h3 className ="product__name">Name: {productProps.productName}</h3>
        <Link to={`/product/detail/${productProps.id}`}>
          { productProps.name }
        </Link>
        <div className="product__price">Price: {productProps.price}</div>
        <div className="product__productType">ProductType: {productType.type}</div>
    </section>
   
)