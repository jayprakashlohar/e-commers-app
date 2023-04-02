import {
  useToast,
  Input,
  Box,
  Heading,
  Button,
  FormLabel,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
import { AUTH_REGISTER_RESET } from "../Redux/Auth/actionTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
  const authState = useSelector((state) => state.Auth.userRegister);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (authState.message === "user already registerd please login") {
      toast({
        title: authState.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: AUTH_REGISTER_RESET });
    }
    if (authState.message === "user registerd successfully") {
      toast({
        title: authState.message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });

      dispatch({ type: AUTH_REGISTER_RESET });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [dispatch, navigate, authState.error, authState.message, toast]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authRegister(formData));
  };

  return (
    <Box height="95vh" bg="lightblue" pt="50px">
      <Box
        margin="auto"
        padding="25px"
        background="#fff"
        boxShadow="dark-lg"
        p="8"
        rounded="md"
        bg="white"
        w={{ base: "90%", sm: "50%", md: "80%", lg: "30%" }}
      >
        <Heading textAlign="center" mb="30px" fontFamily="cursive">
          Sign up
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormLabel fontFamily="cursive">Name </FormLabel>

          <Input
            variant="flushed"
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            required={true}
          />
          <FormLabel m="10px 0px 10px 0px" fontFamily="cursive">
            Email{" "}
          </FormLabel>

          <Input
            variant="flushed"
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            required={true}
          />

          <FormLabel m="10px 0px 10px 0px" fontFamily="cursive">
            Password{" "}
          </FormLabel>

          <Input
            variant="flushed"
            type={"password"}
            onChange={handleChange}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            required
          />

          <Button
            type="submit"
            w="100%"
            marginTop="30px"
            borderRadius="20px"
            bg="black"
            _hover="none"
            color="#fff"
          >
            {authState.loading ? "Registering..." : "Register"}
          </Button>
        </form>
        <Text
          onClick={() => navigate("/login")}
          textAlign="center"
          mt="50px"
          color="#58595b"
          fontFamily="cursive"
        >
          Already a user ?
          <span
            style={{
              color: "blue",
              marginLeft: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              fontFamily:"cursive"
            }}
          >
            Login
          </span>
        </Text>
      </Box>
    </Box>
  );
};

export { Signup };
