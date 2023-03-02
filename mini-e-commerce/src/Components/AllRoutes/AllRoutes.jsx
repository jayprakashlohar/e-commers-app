import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Cart } from "../Cart/Cart";
import { Home } from "../Home/Home";
import { Mobile } from "../Pages/Mobile";
import { Wishlist } from "../Pages/Wishlist";
import { ProductsDetails } from "../Pages/ProductsDetails";
import { Payment } from "../Payment/Payment";
import { ThankYou } from "../Pages/ThankYou";
import {PrivateRoute} from "./PrivateRoute"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/appleproducts" element={<Mobile />}></Route>\{" "}
        <Route path="/products/:id" element={<ProductsDetails />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              {" "}
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>
      </Routes>
    </div>
  );
};

export { AllRoutes };
