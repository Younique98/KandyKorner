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
import {EmployeeList} from "./employees/EmployeeList"
import {EmployeeProvider} from "./employees/EmployeeProvider"
import {CustomerList} from "./customers/CustomerList"
import {CustomerProvider} from "./customers/CustomerProvider"
import {ProductForm} from "./products/ProductForm"
import { CustomerCandyProvider } from "./customers/CustomerCandyProvider";


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
              <CustomerProvider>

              <Route path="/products/create">
        <ProductForm />
      </Route>


  
        <Route exact path="/locations">
          <LocationProvider>
          <LocationList />
          </LocationProvider>
        </Route>

        <Route exact path="/products">
          <ProductProvider>
            <CustomerCandyProvider>
              <ProductSearch />
              <ProductList />
              </CustomerCandyProvider>
              </ProductProvider>
        </Route>

        {/* <Route path="/products/create">
        <ProductForm />
      </Route> */}
     

        <Route exact path="/products/detail/:productId(\d+)">
    <ProductDetail />
        </Route>

        <Route path="/products/edit/:productId(\d+)">
    <ProductForm />
</Route>


      </CustomerProvider>
        </LocationProvider>
        </ProductTypeProvider>
         </ProductProvider>


         <Route path="/locations">
        <LocationProvider>
        <LocationList />
        </LocationProvider>
        
      </Route>



      <Route path="/customers">
        <CustomerProvider>
        <CustomerList />
        </CustomerProvider>
      </Route>

      <Route path="/employees">
        <LocationProvider>
        <EmployeeProvider>
        <EmployeeList />
        
        </EmployeeProvider>
        </LocationProvider>
      </Route>

     
      </>
    );
  };
  