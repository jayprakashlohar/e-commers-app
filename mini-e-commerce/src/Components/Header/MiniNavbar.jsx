import React from "react";
import Styles from "../Styles/Navbar.module.css";

const MiniNavbar = () => {
  return (
    <>
      <div className={Styles.MiniNavDiv}>
        <p>Store</p>
        <p>I phone</p>
        <p>Mac</p>
        <p>Watch</p>
        <p>AirPods</p>
        <p>Accessories</p>
        <p>Support</p>
       
      </div>
    </>
  );
};

export { MiniNavbar };
