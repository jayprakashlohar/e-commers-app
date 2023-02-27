import React from "react";
import { useToast, Box, Button, Heading, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart, changeQty } from "../Redux/Products/action";
import { CartTotal } from "./CartTotal";

const Cart = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.Products.cart);

  const handleQty = (item) => {
    changeQty(item.id);
  };

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
                const { _id, imgUrl, brand, title, rate, price } = item;
                return (
                  <Box
                    m="10px 0px 10px 0px"
                    display="flex"
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
                          <Button
                            borderRadius="50%"
                            onClick={() => handleQty(item._id, item.qty - 1)}
                          >
                            -
                          </Button>
                          <Button borderRadius="50%" ml="5px">
                            {item.qty}
                          </Button>
                          <Button
                            borderRadius="50%"
                            ml="5px"
                            onClick={() => handleQty(item._id, item.qty + 1)}
                          >
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
            </div>
            <CartTotal />
          </Box>
        ) : (
          <Box>
            <Heading textAlign="center" p="200px">
              Your cart is empty!
            </Heading>
          </Box>
        )}
      </div>
    </>
  );
};

export { Cart };
