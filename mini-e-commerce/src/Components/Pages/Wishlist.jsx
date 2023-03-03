import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../Styles/Product.module.css";
import { Box, Text } from "@chakra-ui/react";
import { removeWishlistItem } from "../Redux/Products/action";
import { useToast } from "@chakra-ui/react";
import { fetchwishlistData } from "../Redux/Products/action";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const wishData = useSelector((state) => state.Products.wishlistData);
  useEffect(() => {
    dispatch(fetchwishlistData);
  }, []);

  const handleRemove = (item) => {
    dispatch(removeWishlistItem(item._id));
    toast({
      title: "Remove your product",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    dispatch(fetchwishlistData);
  };

  return (
    <div>
      {wishData.length > 0 ? (
        <div className={Styles.proContainer}>
          {wishData.map((item) => {
            const { id, imgUrl, brand, title, rate, price } = item;
            return (
              <div key={item.id}>
                <img src={imgUrl} alt="" />
                <h2>{brand}</h2>
                <h3>{title}</h3>
                <h3>{rate}</h3>
                <h3>₹ {price}</h3>
                <p
                  className={Styles.removeWish}
                  onClick={() => handleRemove(item)}
                >
                  REMOVE
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <Box p={{ base: "100px", lg: "200px" }}>
          <Text textAlign="center" color="#58595b" fontSize="30px">
            Your WishList Is Empty!
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="20px"
          >
            <Link to="/appleproducts">
              <button className="continueShop">Continue Shopping</button>
            </Link>
          </Box>
        </Box>
      )}
    </div>
  );
};

export { Wishlist };
