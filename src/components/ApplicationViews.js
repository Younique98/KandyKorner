import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import {ProductProvider} from "./products/ProductProvider"
import {ProductTypeProvider} from "./products/ProductTypeProvider"
import {ProductList} from "./products/ProductList"
import {ProductSearch} from "./products/ProductSearch"
import {ProductDetail} from "./products/ProductDetail"


export const ApplicationViews = () => {
    return (
      <>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <Home />
        </Route>
        

          <ProductProvider>
            <ProductTypeProvider>
            <LocationProvider>


  
        <Route exact path="/locations">
          <LocationProvider>
          <LocationList />
          </LocationProvider>
        </Route>

        <Route exact path="/products">
              <ProductSearch />
              <ProductList />
        </Route>
        <Route exact path="/products/detail/:productId(\d+)">
    <ProductDetail />
        </Route>

        </LocationProvider>
        </ProductTypeProvider>
         </ProductProvider>


         <Route path="/locations">
        <LocationProvider>
        <LocationList />
        </LocationProvider>
      </Route>

      {/* <Route path="/products">
        <ProductProvider>
        <ProductList />
        </ProductProvider>
      </Route> */}
      </>
    );
  };
  