import React from "react";
import {
  Box,
  Text,
  StackDivider,
  Input,
  VStack,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

const Card = () => {
  return (
    <>
      <Box
        color={"black"}
        width={["100%", "100%", "70%", "70%", "70%"]}
        p="20px"
        boxShadow="base"
        mb="50px"
      >
        <Text as="b" p="20px 0px 0px 20px">
          TOTAL PAYABLE AMOUNT :-
        </Text>
        <Box mt="15px" textAlign={"left"} lineHeight="30px" pl="20px">
          <CalendarIcon /> <Text as="b">PAYMENT METHODS</Text>
          <br />
          <Text as="b">Credit / Debit Card</Text>
          <p>Enter your card number (Visa, Mastercard, Amex)</p>
          <Input bg="#F3F3F3" placeholder="Enter card Number"></Input>
          <p>Enter Name on Card</p>
          <Input bg="#F3F3F3" placeholder="Enter Name on Card"></Input>
          <Flex flexDirection={["column", "column", "column", "row", "row"]}>
            <Box width={["100%", "100%", "100%", "50%", "50%"]} p="15px">
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                <Box>
                  <Text>CVV*</Text>
                  <Input bg="#F3F3F3" width={"100px"} type="password"></Input>
                </Box>
              </VStack>
            </Box>
            <Box width={["100%", "100%", "100%", "50%", "50%"]} p="15px">
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                <Box>
                  <Text>Exp. Date *</Text>
                  <Input bg="#F3F3F3" type={"date"}></Input>
                </Box>
              </VStack>
            </Box>
          </Flex>
          <Checkbox defaultChecked>Save card as per RBI guideline</Checkbox>
        </Box>
        <hr style={{ border: "1px solid gray", marginTop: "20px" }} />
        <Box m="10px 0px 0px 18px" fontWeight="bold">
          <input
            type="checkbox"
            style={{ marginRight: "5px", cursor: "pointer" }}
          />
          Cash On Delivery/Pay On Delivery
        </Box>
      </Box>
    </>
  );
};

export { Card };
