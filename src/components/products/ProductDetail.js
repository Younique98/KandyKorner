import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"
import { useParams, useHistory } from "react-router-dom"

export const ProductDetail = () => {
  const { getProductById, releaseProduct } = useContext(ProductContext)

	const [product, setProduct] = useState({})

	const {productId} = useParams();
	const history = useHistory();
    const addToCart = () => {
        releaseProduct(product.id)
          .then(() => {
            history.push("/products")
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

    

      <h3 className="product__name">{product.productName}</h3>
      <div className="product__price">{product.price}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="product__location">Location: {product.location?.name}</div>
      <div className="product__type">Product Type: {product.productTypeId?.name}</div>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={() => {
     history.push(`/products/edit/${product.id}`)
            }}>Edit</button>
    </section>
  )
}