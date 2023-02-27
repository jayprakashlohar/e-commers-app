import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../Styles/Product.module.css";
import { Box, Heading } from "@chakra-ui/react";
import { removeWishlistItem } from "../Redux/Products/action";
import { useToast } from "@chakra-ui/react";
import { fetchwishlistData } from "../Redux/Products/action";

const Wishlist = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const wishData = useSelector((state) => state.Products.wishlistData);
   console.log("wishData",wishData)
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
        <Box>
          <Heading textAlign="center" p="200px">
            Your wishlist is empty!
          </Heading>
        </Box>
      )}
    </div>
  );
};

export { Wishlist };
