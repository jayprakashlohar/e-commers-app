import React from "react";
import Styles from "../Styles/Navbar.module.css";

const MiniNavbar = () => {
  return (
    <>
      <div className={Styles.MiniNavDiv}>
        <p>Products</p>
        <p>Shop</p>
        <p>More products</p>
        <p>Join us</p>
        <p>Terms of use</p>
      </div>
    </>
  );
};

export { MiniNavbar };
