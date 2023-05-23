import React, { useEffect, useState } from "react";
import Styles from "../Styles/Navbar.module.css";
import { BsHeart } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MiniNavbar } from "../Header/MiniNavbar";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { MdSearch } from "react-icons/md";

import { Menu, MenuButton, MenuList, MenuItem, Input } from "@chakra-ui/react";
import { Profile } from "../Pages/Profile";
import { useNavigate } from "react-router-dom";
import { BsApple } from "react-icons/bs";
import { fetchCartData } from "../Redux/Products/action";
import axios from "axios";

const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const cartLength = useSelector((state) => state.Products.cartLength);

  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleRedirect = () => {
    // dispatch(setSingleProductDetails(params));
    setResult([]);
    navigate("/appleproducts");
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query.length === 0) {
        setResult([]);
      } else {
        axios
          .get(`https://pear-naughty-clam.cyclic.app/iphone?q=${query}&limit=5`)
          .then((res) => setResult(res.data.data));
      }
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, [query]);

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
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <AiOutlineSearch className={Styles.search_icon} />
          <div className={Styles.serch_result_box}>
            {result.length > 0 &&
              result.map((item, id) => {
                return (
                  <div
                    onClick={() => handleRedirect(item)}
                    key={id}
                    className={Styles.search_product_list}
                  >
                    <img src={item.imgUrl} />
                    <span>{item.title}</span>
                  </div>
                );
              })}
          </div>
        </div>
        {/* ----------- */}
        {/* <div >
          <MdSearch />
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search Products"
          />
        </div> */}
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
