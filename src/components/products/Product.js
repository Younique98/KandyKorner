import React from "react"

import { Link } from "react-router-dom"
import "../product/Product.css"



export const ProductCard = ({ product }) => (
  
    <section className="product">
        <h3 className="product__name">
          <Link to={`/products/detail/${product.id}`}>
            { product.name }
          </Link>
        </h3>
        <div className="product__price">{ product.price }</div>
    </section>
    
)