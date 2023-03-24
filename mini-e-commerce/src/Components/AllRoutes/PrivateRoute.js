import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let token = localStorage.getItem("token");
  if (!token) {
    alert("Please login first");
    return <Navigate to={"/login"} />;
  }
  return <div>{children}</div>;
}

export { PrivateRoute };
