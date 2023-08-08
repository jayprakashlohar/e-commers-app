import { Box, Button, Input, Heading, Text, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../Redux/ForgotPassword/action";

const ForgotPassword = () => {
  let dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const { isLoading, message } = useSelector((state) => state.forgetPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <Box
      h="40vh"
      w={{ base: "90%", sm: "50%", md: "90%", lg: "30%" }}
      m="auto"
      mt="40px"
      mb="40px"
      p="20px"
      shadow="base"
    >
      <Heading fontSize="20px" textAlign="center" m="20px" fontFamily="cursive">
        Forgot Password
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {message && <Text m="10px">{message}</Text>}
        <Button
          type="submit"
          w="100%"
          mt="30px"
          borderRadius="20px"
          background="black"
          color="#ffff"
          _hover={{ background: "black" }}
        >
          {isLoading ? (
            <Spinner
              thickness="2px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="sm"
            />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Box>
  );
};

export { ForgotPassword };
