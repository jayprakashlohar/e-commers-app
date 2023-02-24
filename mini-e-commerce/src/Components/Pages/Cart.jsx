import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import React from "react";
import { removeToCart } from "../Redux/Products/action";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.Products.cart);

  const handleRemove = (item) => {
    dispatch(removeToCart(item.id));
    toast({
      title: "Remove your product",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Box>
      <Box>
        {cartData && cartData.length > 0 ? (
          <Box display="flex">
            <Box m="30px 0px 30px 0px" border="1px solid black" w="70%">
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
                const { id, imgUrl, brand, title, rate, price } = item;
                return (
                  <Box
                    m="10px 0px 10px 0px"
                    display="flex"
                    // bg="#ffff"
                    boxShadow="base"
                    justifyContent="space-between"
                    padding="10px"
                    key={item.id}
                  >
                    <Box display="flex">
                      <Image w="50%" src={imgUrl} alt="" />
                      <Box lineHeight="30px" fontWeight="500">
                        <h2>{brand}</h2>
                        <h3>{title}</h3>
                        <h3>{rate}</h3>
                        <Box mt="80px">
                          {" "}
                          <Button borderRadius="50%">-</Button>
                          <Button borderRadius="50%" ml="5px">
                            1
                          </Button>
                          <Button borderRadius="50%" ml="5px">
                            +
                          </Button>
                          <Button ml="20px" onClick={() => handleRemove(item)}>
                            Delete
                          </Button>
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <h3 style={{ fontWeight: "bold", fontSize: "25px" }}>
                        ₹ {price}
                      </h3>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              border="1px solid red"
              w="350px"
              m="30px 0px 0px 30px"
              h="300px"
              p="15px"
            >
              <Box display="flex">
                <input
                  style={{ height: "18px", width: "18px" }}
                  type="checkbox"
                />
                <p
                  style={{
                    color: "green",
                    fontSize: "13px",
                    marginLeft: "5PX",
                  }}
                >
                  Your order is eligible for FREE Delivery. Select this option
                  at checkout. Details{" "}
                </p>
              </Box>
              <Box border="1px solid teal" mt="20px">
                <p style={{ fontSize: "20px", fontWeight: "550" }}>
                  Subtotal: <span>price</span>
                </p>
                <Button mt="40px" w="full" bg="#ffad33">
                  Proceed to buy
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box>
            <Heading textAlign="center" p="200px">
              Your cart is empty!
            </Heading>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export { Cart };
