import {
  useToast,
  Input,
  Box,
  Heading,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  FormLabel,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";
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
    <Box background="blue.400" height="100vh" border="1px solid blue">
      <Box
        width="35%"
        margin="auto"
        height="475px"
        background="#fff"
        marginTop="50px"
        boxShadow="dark-lg"
        p="2"
        rounded="md"
        bg="white"
      >
        <Heading textAlign="center" marginTop="20px">
          Sign up
        </Heading>
        <Stack py={6} gap={4} w={{ base: "85%", md: "70%" }} m="auto">
          <FormLabel>Email </FormLabel>
          <InputGroup>
            {" "}
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.600" />}
            />
            <Input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Email"
              value={formData.email}
              required={true}
            />
          </InputGroup>
          <FormLabel>Password </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.600" />}
            />

            <Input
              type={"password"}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              value={formData.password}
            />
          </InputGroup>

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
            Already a User ? Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export { Signup };
