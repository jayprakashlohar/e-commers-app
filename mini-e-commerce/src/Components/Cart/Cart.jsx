import React, { useEffect } from "react";
import { useToast, Box, Text, Heading, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeToCart,
  changeQty,
  fetchCartData,
} from "../Redux/Products/action";
import { CartTotal } from "./CartTotal";

const Cart = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.Products.cartData);

  useEffect(() => {
    dispatch(fetchCartData);
  }, []);

  const handleQty = (id, qty, item) => {
    item.qty = qty;

    dispatch(changeQty(id, item));
  };

  const handleRemove = (item) => {
    dispatch(removeToCart(item._id));
    toast({
      title: "Remove your product",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    dispatch(fetchCartData);
  };
  return (
    <>
      <div>
        {cartData && cartData.length > 0 ? (
          <Box className="cartDiv">
            <div className="cartSecondDiv">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="20px"
              >
                {" "}
                <Heading fontSize="30px">Shopping Cart</Heading>
                <p>price</p>
              </Box>
              <hr style={{ width: "98%", margin: "auto" }} />

              {cartData.map((item) => {
                const { _id, imgUrl, brand, title, rate, price, qty } = item;
                return (
                  <Box
                    m="0px 0px 10px 0px"
                    display="flex"
                    boxShadow="base"
                    justifyContent="space-between"
                    padding="10px"
                    key={item.id}
                    h={{ base: "150px", lg: "250px" }}
                  >
                    <Box display="flex">
                      <Image w="50%" src={imgUrl} alt="" />
                      <Box lineHeight="30px" fontWeight="500">
                        <h2>{brand}</h2>
                        <h3>{title}</h3>
                        <h3>{rate}</h3>

                        <Box
                          mt={{ base: "13px", lg: "100px" }}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          {" "}
                          <button
                            className="btn"
                            disabled={qty - 1 == 0}
                            onClick={() => handleQty(_id, qty - 1, item)}
                          >
                            -
                          </button>
                          <button className="btn1">{qty}</button>
                          <button
                            className="btn1"
                            onClick={() => handleQty(_id, qty + 1, item)}
                          >
                            +
                          </button>
                          <button
                            className="deleteBtn"
                            onClick={() => handleRemove(item)}
                          >
                            Delete
                          </button>
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <h3 className="totalPrice">₹{price}</h3>
                    </Box>
                  </Box>
                );
              })}
            </div>
            <CartTotal />
          </Box>
        ) : (
          <Box p={{ base: "100px", lg: "200px" }}>
            <Text
              textAlign="center"
              color="58595b"
              fontSize={{ base: "20px", lg: "30px" }}
            >
              Your Cart Is Empty!
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
    </>
  );
};

export { Cart };
