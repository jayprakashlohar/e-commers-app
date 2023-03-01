import React from "react";
import {
  Box,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const [total, setTotal] = useState();
  const cart = useSelector((state) => state.Products.cartData);
  // console.log(total)

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
      <Box
        m="30px 0px 0px 30px"
        h="auto"
        p="15px"
        boxShadow="base"
        w={{ base: "80%", md: "90%", lg: "350px" }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <input style={{ height: "18px", width: "18px" }} type="checkbox" />
          <p
            style={{
              color: "green",
              fontSize: "13px",
              marginLeft: "10PX",
              marginTop: "12px",
            }}
          >
            Your order is eligible for FREE Delivery. Select this option at
            checkout. Details{" "}
          </p>
        </Box>
        <Box mt="20px">
          <p style={{ fontSize: "20px", fontWeight: "550" }}>
            Subtotal: <span>{total}</span>
          </p>
          <Button mt="40px" w="full" bg="#ffad33" _hover="none">
            Proceed to buy
          </Button>
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
