import React, { useEffect } from "react";
import Styles from "../Styles/Navbar.module.css";
import { BsHeart } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MiniNavbar } from "../Header/MiniNavbar";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Text,
} from "@chakra-ui/react";
import { Profile } from "../Pages/Profile";
import { useNavigate } from "react-router-dom";
import { BsApple } from "react-icons/bs";
import { fetchCartData } from "../Redux/Products/action";

const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const cartLength = useSelector((state) => state.Products.cartLength);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchCartData);
  }, []);

  return (
    <div>
      <div className={Styles.container}>
        <Link to="/">
          <BsApple className="logo" />
        </Link>

        <div className={Styles.searchInput}>
          <Input
            w="20rem"
            type="text"
            placeholder="Search"
            variant="unstyled"
          />
          <AiOutlineSearch style={{ color: "black", width: "10%" }} />
        </div>
        <Link to="/wishlist">
          <BsHeart className={Styles.navIcon} />
        </Link>
        <Link to="/cart">
          <p style={{ color: "#ffff", fontSize: "10px" }}>{cartLength}</p>
          <FaCartArrowDown className={Styles.navIcon1} />
        </Link>
        <Menu>
          <MenuButton>
            <BiUserCircle className={Styles.navIcon} />
          </MenuButton>
          <MenuList color="black" marginTop="20px">
            <Link to="/adminlogin">
              {" "}
              <MenuItem>Admin</MenuItem>
            </Link>{" "}
            {token && <MenuItem> Profile</MenuItem>}
            {token && (
              <MenuItem>
                {" "}
                <Profile />
              </MenuItem>
            )}
            {!token && (
              <>
                {" "}
                <Link to="/login">
                  {" "}
                  <MenuItem>Login</MenuItem>
                </Link>
                <Link to="/signup">
                  {" "}
                  <MenuItem>Signup</MenuItem>
                </Link>{" "}
              </>
            )}
            {token && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
          </MenuList>
        </Menu>

        {/* <Text>Hi</Text> */}
      </div>
      <MiniNavbar />
    </div>
  );
};

export { Navbar };
