import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Cart } from "../Pages/Cart";
import { Home } from "../Home/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export { AllRoutes };
