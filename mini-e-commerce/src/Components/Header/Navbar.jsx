import React from "react";
import Styles from "../Styles/Navbar.module.css";
import { BsHeart } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MiniNavbar } from "../Header/MiniNavbar";
import AppleLogo from "../Logo/Apple hub.png";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <div className={Styles.container}>
        <Link to="/">
          <img
            style={{ width: "50px", height: "50px" }}
            src={AppleLogo}
            alt="logo"
          />
          {/* <img
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
              alt="logo"
            /> */}
        </Link>

        <div className={Styles.searchInput}>
          <Input w="20rem" type="text" placeholder="Search" />
        </div>
        <BsHeart className={Styles.navIcon} />
        <Link to="/cart">
          <FaCartArrowDown className={Styles.navIcon} />
        </Link>
        <Menu>
          <MenuButton>
            <BiUserCircle className={Styles.navIcon} />
          </MenuButton>
          <MenuList>
            <Link to="/login">
              {" "}
              <MenuItem>Login</MenuItem>
            </Link>

            <Link to="/signup">
              {" "}
              <MenuItem>Signup</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
      <MiniNavbar />
    </div>
  );
};

export { Navbar };
