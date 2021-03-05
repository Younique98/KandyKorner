import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { ProductContext } from "./ProductProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import "./Product.css"
import { useHistory, useParams } from 'react-router-dom';

export const ProductForm = () => {
    const { addProduct, getProductById, updateProduct } = useContext(ProductContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    //for edit, hold on to state of product in this view
    const [product, setProduct] = useState({
      productName: "",
      productTypeId: 0,
      price: 0
    })
  
    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding an product, you need access to the product id for fetching the product you want to edit
    const { productId } = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newProduct = { ...product }
      //product is an object with properties.
      //set the property to the new value
      newProduct[event.target.id] = event.target.value
      //update state
      setProduct(newProduct)
    }

    const handleSaveProduct = () => {
      if (parseInt(product.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an product
        if (productId){
          //PUT - update
          updateProduct({
              id: product.id,
              name: product.name,
              locationId: parseInt(product.locationId),
              customerId: parseInt(product.customerId)
          })
          .then(() => history.push(`/product/detail/${product.id}`))
        }else {
          //POST - add
          addProduct({
              name: product.name,
              price: product.price
          })
          .then(() => history.push("/customerCandy"))
        }
      }
    }

    // Get customers and locations. If productId is in the URL, getproductById
    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (productId) {
          getProductById(productId)
          .then(product => {
              setProduct(product)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="productForm">
        <h2 className="productForm__title">{productId ? "Edit product" : "Add to Grocery List"}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="productName">product name: </label>
            <input type="text" id="name" required autoFocus className="form-control"
            placeholder="product name"
            onChange={handleControlledInputChange}
            value={product.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
              <label htmlFor="type">Product Category:</label>
              <input type="text" id="type" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="product note" value={product.breed}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Pickup location: </label>
            <select value={product.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customer">Customer: </label>
            <select value={product.customerId} id="customerId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a customer</option>
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveProduct()
          }}>
        {productId ? "Save product" : "Add Item to Grocery List"}</button>
        {console.log(productId)}
      </form>
    )
}