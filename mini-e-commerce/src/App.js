import React from "react";
import "./App.css";
import { AllRoutes } from "./Components/AllRoutes/AllRoutes";
// import { useEffect } from "react";
// import { useJwt } from "react-jwt";
// import { useNavigate } from "react-router-dom";

function App() {
  // let navigate = useNavigate();

  // const token = localStorage.getItem("token") || "";
  // const { decodedToken } = useJwt(token);
  // const TokenExpired = () => {
  //   const currentTime = Date.now() / 1000;
  //   return decodedToken.exp < currentTime;
  // };

  // const handleTokenExpiration = () => {
  //   const token = localStorage.getItem("token");

  //   if (token && TokenExpired(token)) {
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   }
  // };

  // useEffect(() => {
  //   handleTokenExpiration();
  // }, []);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
