import React, { useEffect, useState, useContext } from "react"
import "./Product.css"
import { Link, useHistory, useParams } from "react-router-dom"
import { ProductContext } from "./ProductProvider";

export const ProductCard = ({productProps, productType}) => {
    const history = useHistory();
    const {productId} =useParams();
    const {products, getProductById, addingProduct} = useContext(ProductContext)
    const [product, setProduct] = useState({})
  const moveToCart = () => {
    
          addingProduct(product)
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

      return(
      <section className="product">
        
        <h3 className ="product__name">Name: {productProps.productName}
        <Link to={`/product/detail/${productProps.id}`}>
          { productProps.name }
        </Link>
        </h3>
        <div className="product__price">Price: {productProps.price}</div>
        {/* <div className="product__productType">ProductType: {productPicked.type}</div> */}
        {products.map(product => {
          const productPicked = products.find(productPickedAndPurchased => productPickedAndPurchased.id === product.locationId)
          {console.log(productPicked)}
          return <div className="product__productType">ProductType: {productPicked.type}</div>
        })}
        <button className="product__purchaseButton" onClick={moveToCart}>Purchase</button>
    </section>
   )
}