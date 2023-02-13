import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Cart } from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export { AllRoutes };
