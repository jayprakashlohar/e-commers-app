import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Box>
      <Box
        textAlign="center"
        display="block"
        justifyContent="center"
        alignItems="center"
        fontSize="30px"
        h="80vh"
      >
        <Heading mt="15rem">Thank You For Shopping....</Heading>
        <Link to="/">
          {" "}
          <Button p="10px 30px" color="#fff" bg="green" _hover="none" mt="20px">
            Go To Home{" "}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export { ThankYou };
