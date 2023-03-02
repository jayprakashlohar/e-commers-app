import {
  Box,
  VStack,
  StackDivider,
  Heading,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Order = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [finalAddress, setFinalAddress] = useState(null);
  const [total, setTotal] = useState();
  const cart = useSelector((state) => state.Products.cartData);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Box>
      <Box boxShadow="base" w="350px" ml="50px" border="1px solid #ffff">
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

        <Box
          width={"90%"}
          m="auto"
          fontWeight={"bold"}
          bg="#ffad33"
          textAlign="center"
          p="10px"
          mt="20px"
          mb="20px"
        >
          <Link
            to={"/thankyou"}
            onClick={() => {
              finalAddress
                ? toast({
                    title: "SUCCESS",
                    description: "order placed successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  })
                : toast({
                    title: "ERROR",
                    description: "Please Enter valid address details",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                    // title: "SUCCESS",
                    // description: "order placed successfully",
                    // status: "success",
                    // duration: 5000,
                    // isClosable: true,
                    // position: "top",
                  });
              alert("Your order is placed successfully 🎁");
              navigate("/thankyou");
            }}
          >
            PLACE ORDER
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { Order };
