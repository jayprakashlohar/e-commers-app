import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Box>
      <Box p={{ base: "100px", lg: "200px" }}>
        <Text textAlign="center" color="#58595b" fontSize="35px">
          Thank You For Shopping....
        </Text>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="20px"
        >
          <Link to="/">
            <button className="continueShop">Continue Shopping</button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { ThankYou };
