import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../Styles/Product.module.css";
import { Heading } from "@chakra-ui/react";
import { removeWishlistItem } from "../Redux/Products/action";
import { useToast } from "@chakra-ui/react";

const Wishlist = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.Products.addToWish);

  const handleRemove = (item) => {
    dispatch(removeWishlistItem(item.id));
    toast({
      title: "Remove your product",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <div>
      <Heading textAlign="center" m="20px" fontSize="25px">
        Your Wishlist Items...
      </Heading>
      <div className={Styles.proContainer}>
        {wishlistData.map((item) => {
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
    </div>
  );
};

export { Wishlist };
