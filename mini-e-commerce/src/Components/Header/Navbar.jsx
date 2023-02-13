import React from "react";
import Styles from "../Styles/Navbar.module.css";
import { BsHeart } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Input,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <div className={Styles.container}>
        <Image
          src="https://www.masaischool.com/img/navbar/logo.svg"
          alt="logo"
        />

        <div className={Styles.searchInput}>
          <Input w="30rem" type="text" placeholder="Search" />
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
    </div>
  );
};

export { Navbar };
