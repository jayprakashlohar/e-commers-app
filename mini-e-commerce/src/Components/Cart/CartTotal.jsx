import React from "react";
import {
  Box,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const [total, setTotal] = useState();
  const cart = useSelector((state) => state.Products.cartData);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
      <Box
        h="auto"
        p="15px"
        boxShadow="base"
        w={{ base: "100%", md: "100%", lg: "350px" }}
        m={{ base: "20px 0px 20px 0px", md: "0px", lg: "77px 0px 0px 30px" }}
      >
        <Box
          display="flex"
          justifyContent={{ base: "start", lg: "center" }}
          alignItems="center"
        >
          <input style={{ height: "18px", width: "18px" }} type="checkbox" />
          <Text
            color="green"
            fontSize={{ base: "13px", sm: "16px", lg: "13px" }}
            ml="10px"
            mt={{ base: "12px", sm: "0px", lg: "12px" }}
          >
            Your order is eligible for FREE Delivery. Select this option at
            checkout. Details{" "}
          </Text>
        </Box>
        <Box mt="20px">
          <p style={{ fontSize: "20px", fontWeight: "550" }}>
            Subtotal: <span>₹{total}</span>
          </p>
          <Link to="/payment">
            {" "}
            <Button mt="40px" w="full" bg="#ffad33" _hover="none">
              Proceed to buy
            </Button>
          </Link>

          <Box mt="20px" mb="20px">
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      EMI Available
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up).{" "}
                  <span style={{ color: "green" }}>Learn more</span>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export { CartTotal };
