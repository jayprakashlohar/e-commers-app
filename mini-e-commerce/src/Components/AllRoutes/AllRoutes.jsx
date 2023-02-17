import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Cart } from "../Pages/Cart";
import { Home } from "../Home/Home";
import { Mobile } from "../Pages/Mobile";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/appleproducts" element={<Mobile />}></Route>
      </Routes>
    </div>
  );
};

export { AllRoutes };
