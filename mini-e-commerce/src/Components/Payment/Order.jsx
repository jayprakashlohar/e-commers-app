import {
  Box,
  VStack,
  StackDivider,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { useState, useEffect } from "react";
import OrderPayment from "../../razorpay/OrderPayment";

const Order = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState();
  const cart = useSelector((state) => state.Products.cartData);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handlePayment = () => {
    OrderPayment(total);
    navigate("/thankyou");
  };

  return (
    <Box>
      <Box
        boxShadow="base"
        ml={{ base: "0px", md: "35px", lg: "18px" }}
        border="1px solid #ffff"
        mb="20px"
        w={{ base: "100%", md: "90%", lg: "350px" }}
      >
        <Box color={"black"} p={"5px"} mt={"20px"}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={2}
            align="stretch"
            m={"20px"}
          >
            <Box h="40px">
              <Heading as="h3" size="sm" textAlign={"left"} fontSize="22px">
                Order Summary
              </Heading>
            </Box>
            <Box h="20px">
              <HStack p={"0"} justifyContent={"space-between"}>
                <Box h="40px">
                  <p>Subtotal</p>
                </Box>
                <Box fontWeight={"bold"}>
                  <p>₹ {total}</p>
                </Box>
              </HStack>
            </Box>
            <Box h="20px">
              <HStack
                p={"0"}
                justifyContent={"space-between"}
                color={"#FF3399"}
              >
                <Box h="40px">
                  <p>DISCOUNT</p>
                </Box>
                <Box fontWeight={"bold"}>
                  <p>₹ </p>
                </Box>
              </HStack>
            </Box>

            <Box h="20px">
              <HStack p={"0"} justifyContent={"space-between"}>
                <Box h="40px">
                  <p>Delivery Charges</p>
                </Box>
                <Box fontWeight={"bold"}>
                  <p>₹ 0.00</p>
                </Box>
              </HStack>
            </Box>

            <Box h="40px" borderBottom="2px solid black">
              <HStack
                p={"0"}
                mt="10px"
                justifyContent={"space-between"}
                fontWeight={"bold"}
              >
                <Box h="30px">
                  <p style={{ color: "#cc0000" }}>Order Total:</p>
                </Box>
                <Box fontWeight={"bold"}>
                  <p style={{ color: "#cc0000" }}>₹ {total}</p>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>

        <Button
          w="90%"
          m="20px 0px 20px 20px"
          bg="#ffad33"
          fontWeight="bold"
          _hover={{ bg: "#ffcc00" }}
          onClick={handlePayment}
        >
          PLACE ORDER
        </Button>
      </Box>
    </Box>
  );
};

export { Order };
