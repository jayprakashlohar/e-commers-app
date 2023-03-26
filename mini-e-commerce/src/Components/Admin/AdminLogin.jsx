import {
  FormLabel,
  Input,
  Box,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email === "admin@gmail.com" && password === "jay@2023") {
      toast({
        position: "top",
        title: "Login Successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/admin");
      localStorage.setItem("adminLogin", email);
    } else {
      toast({
        title: `Error! Wrong Email or Password`,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box height="100vh" pt="35px" bg="lightblue">
      <Box
        margin="auto"
        padding="25px"
        background="#fff"
        boxShadow="dark-lg"
        p="8"
        mt="50px"
        rounded="md"
        bg="white"
        w={{ base: "90%", md: "80%", lg: "30%" }}
      >
        <Heading textAlign="center" mb="30px">
          Login
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormLabel>Email </FormLabel>

          <Input
            variant="flushed"
            type={"email"}
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />

          <FormLabel m="10px 0px 10px 0px">Password </FormLabel>

          <Input
            variant="flushed"
            type={"password"}
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />

          <Button
            w="100%"
            marginTop="25px"
            mb="30px"
            borderRadius="20px"
            bg="black"
            _hover="none"
            color="#fff"
            type="submit"
          >
            {" "}
            LOGIN
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export { AdminLogin };
