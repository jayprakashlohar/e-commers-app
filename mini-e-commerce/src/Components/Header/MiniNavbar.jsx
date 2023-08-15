import React from "react";
import Styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { Button, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const MiniNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div className={Styles.MiniNavDiv}>
        <p>Store</p>
        <Link to="/appleproducts">
          <p>I phone</p>
        </Link>
        <p>Mac</p>
        <p>Watch</p>
        <p>AirPods</p>
        <p>Accessories</p>
        <p>Support</p>
        <Button size="xs"  variant="outline" onClick={toggleColorMode}>
          {colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
        </Button>
      </div>
    </>
  );
};

export { MiniNavbar };
