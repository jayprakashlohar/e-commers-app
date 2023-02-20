import {
  FormLabel,
  Input,
  useDisclosure,
  useToast,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../Redux/Auth/action";
import { AUTH_LOGIN_RESET } from "../Redux/Auth/actionTypes";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
  const authState = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    onOpen();
    try {
      if (authState.userLogin.message === "Invalid Credential") {
        toast({
          title: authState.message,
          title: "Invalid Credential",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else if (
        authState.userLogin.message !== "please signup first" &&
        authState.userLogin.message
      ) {
        toast({
          title: "Login successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        dispatch({ type: AUTH_LOGIN_RESET });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch {
      toast({
        title: authState.message,
        title: "Invalid Credential",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  }, [authState]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);
    dispatch(authLogin(formData));
  };
  return (
    <Box height="100vh" border="1px solid blue">
      <Box
        width="35%"
        margin="auto"
        height="450px"
        padding="25px"
        background="#fff"
        marginTop="50px"
        boxShadow="dark-lg"
        p="8"
        rounded="md"
        bg="white"
      >
        <Heading textAlign="center">Login</Heading>

        <FormLabel m="10px 0px 10px 0px">Email </FormLabel>
        <Input
          type={"email"}
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
        <FormLabel m="10px 0px 10px 0px">Password </FormLabel>
        <Input
          type={"password"}
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          colorScheme="blue"
          w="100%"
          marginTop="25px"
        >
          {" "}
          Login
        </Button>

        <Button
          w="100%"
          mt="25px"
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </Button>
        <p className="login" onClick={() => navigate("/signup")}>
          Don't have an account ?{" "}
          <span style={{ color: "blue" }}> Sign up</span>
        </p>
      </Box>
    </Box>
  );
};

export { Login };
