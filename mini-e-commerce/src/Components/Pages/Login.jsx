import {
  FormLabel,
  Input,
  useDisclosure,
  useToast,
  Box,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../Redux/Auth/action";
import { AUTH_LOGIN_RESET } from "../Redux/Auth/actionTypes";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";

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
    dispatch(authLogin(formData));
  };
  return (
    <Box height="100vh" pt="35px" bg="lightblue">
      <Box
        margin="auto"
        padding="25px"
        background="#fff"
        boxShadow="dark-lg"
        p="8"
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
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            required={true}
          />

          <FormLabel m="10px 0px 10px 0px">Password </FormLabel>

          <Input
            variant="flushed"
            type={"password"}
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            required={true}
          />
          <Text
            float="right"
            fontSize="12px"
            color="#58595b"
            mt="5px"
            fontWeight="400"
            cursor="pointer"
          >
            Forgot password?
          </Text>
          <Button
            w="100%"
            marginTop="25px"
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
        <p className="login1" onClick={() => navigate("/signup")}>
          Or Sign Up Using
        </p>
        <Box display="flex" justifyContent="center" alignItems="center">
          <BsFacebook className="faceBook" />
          <AiFillTwitterCircle className="twitter" />
          <AiFillGoogleCircle className="google" />
        </Box>

        <p className="login">Have not account yet?</p>
        <p
          onClick={() => navigate("/signup")}
          style={{
            color: "  color: #58595b;",
            textAlign: "center",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {" "}
          SIGN UP
        </p>
      </Box>
    </Box>
  );
};

export { Login };
