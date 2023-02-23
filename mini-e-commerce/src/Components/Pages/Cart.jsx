import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { removeToCart } from "../Redux/Products/action";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";

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
    <>
      <Box>
        {cartData && cartData.length > 0 ? (
          <Box m="20px 0px 20px 0px">
            {cartData.map((item) => {
              const { id, imgUrl, brand, title, rate, price } = item;
              return (
                <Box
                  border="1px solid red"
                  display="flex"
                  justifyContent="space-between"
                  w="50%"
                  key={item.id}
                  m="10px 0px 10px 0px"
                  padding="10px"
                >
                  <Box display="flex">
                    <Image w="50%" src={imgUrl} alt="" />
                    <Box mt="130px">
                      <Button>+</Button>
                      <Button>count</Button>
                      <Button>-</Button>
                    </Box>
                  </Box>
                  <Box>
                    <h2>{brand}</h2>
                    <h3>{title}</h3>
                    <h3>{rate}</h3>
                    <h3>₹ {price}</h3>
                    <AiTwotoneDelete
                      style={{
                        marginTop: "30px",
                        width: "50px",
                        cursor: "pointer",
                        height: "25px",
                        float: "right",
                      }}
                      onClick={() => handleRemove(item)}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        ) : (
          <Box>
            <Heading textAlign="center" p="200px">
              Your cart is empty!
            </Heading>
          </Box>
        )}
      </Box>
    </>
  );
};

export { Cart };
