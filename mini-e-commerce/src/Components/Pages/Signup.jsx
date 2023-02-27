import {
  useToast,
  Input,
  Box,
  Heading,
  Stack,
  Button,
  FormLabel,
} from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
import { AUTH_REGISTER_RESET } from "../Redux/Auth/actionTypes";

const initialState = {
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
    <Box height="100vh">
      <Box
        margin="auto"
        height="450px"
        background="#fff"
        marginTop="50px"
        boxShadow="dark-lg"
        p="2"
        rounded="md"
        bg="white"
        w={{ base: "90%", md: "80%" ,lg:"35%" }}
      >
        <Heading textAlign="center" marginTop="20px">
          Sign up
        </Heading>
        <Stack py={4} gap={2} w={{ base: "100%", md: "90%" }} m="auto">
          <FormLabel>Email </FormLabel>

          <Input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
            value={formData.email}
            required={true}
          />

          <FormLabel>Password </FormLabel>

          <Input
            type={"password"}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            value={formData.password}
          />

          <Button
            bg="blue"
            onClick={handleSubmit}
            _hover={{ bg: "green" }}
            color={"white"}
            fontSize="18px"
            w={"100%"}
          >
            {authState.loading ? "Registering..." : "Register"}
          </Button>
          <Button onClick={() => navigate("/login")}>
            Already a user ?
            <span style={{ color: "blue", marginLeft: "5px" }}>Login</span>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export { Signup };
