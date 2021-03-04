import React, { useEffect } from "react"
import "./Product.css"
import { Link } from "react-router-dom"

export const ProductCard = ({productProps, productType}) => (
   
  
      <section className="product">
        {console.log(productType)}
        <h3 className ="product__name">Name: {productProps.productName}
        <Link to={`/product/detail/${productProps.id}`}>
          { productProps.name }
        </Link>
        </h3>
        <div className="product__price">Price: {productProps.price}</div>
        <div className="product__productType">ProductType: {productType.type}</div>
        <button className="product__purchaseButton" onClick={addToCart}>Purchase</button>
    </section>
   
)