import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Cart } from "../Pages/Cart";
import { AutoSlider } from "../Slider/AutoSlider";
import Slider from "react-slick";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<AutoSlider />}></Route>
      </Routes>
    </div>
  );
};

export { AllRoutes };
