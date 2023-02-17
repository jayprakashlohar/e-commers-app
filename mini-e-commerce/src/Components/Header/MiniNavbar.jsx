import React from "react";
import Styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";

const MiniNavbar = () => {
  return (
    <>
      <div className={Styles.MiniNavDiv}>
        <p>Store</p>
        <Link to="appleproducts">
          <p>I phone</p>
        </Link>
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
