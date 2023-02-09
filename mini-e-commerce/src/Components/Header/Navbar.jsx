import React from "react";
import Styles from "../Styles/Navbar.module.css";
import { Image, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

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
          {/* <AiOutlineSearch className={Styles.searchIcon} /> */}
        </div>
        <BsHeart className={Styles.navIcon} />
        <FaCartArrowDown className={Styles.navIcon} />
        <BiUserCircle className={Styles.navIcon} />
      </div>
    </div>
  );
};

export { Navbar };
