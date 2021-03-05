import React, { useState, createContext } from "react"
export const CustomerCartContext = createContext()



export const CustomerCandyProvider = (props) => {
    const [candyPicked, setCandyPicked] = useState([])

const addProductToCart = product => {
    return fetch("http://localhost:8088/customerCandy", {
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

    return(
        <CustomerCartContext.Provider value={{
            candyPicked: candyPicked,
            setCandyPicked: setCandyPicked,
            addProductToCart: addProductToCart,
            getProductById: getProductById

        }}>
            {props.children}
        </CustomerCartContext.Provider>
    )
}