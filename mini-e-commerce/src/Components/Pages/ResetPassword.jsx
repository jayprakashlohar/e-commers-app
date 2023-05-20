import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Button,
  Input,
  FormLabel,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../Redux/ForgotPassword/action";

const ResetPasswordForm = () => {
  const toast = useToast();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    password: "",
    conformPassword: "",
  });

  let { token } = useParams();

  const { isLoading, success } = useSelector((state) => state.forgetPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(userInput, token));
  };

  useEffect(() => {
    if (success) {
      toast({
        title: "Your password has been reset",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      navigate("/login");
    }
  }, [success]);

  return (
    <Box
      h="50vh"
      w={{ base: "90%", sm: "50%", md: "90%", lg: "30%" }}
      m="auto"
      mt="40px"
      mb="40px"
      p="20px"
      shadow="base"
    >
      <Heading fontSize="20px" textAlign="center" m="20px" fontFamily="cursive">
        Reset Password
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormLabel mt="10px">New Password *</FormLabel>
        <Input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
          required
        />
        <FormLabel mt="10px">Confirm Password * </FormLabel>
        <Input
          type="password"
          name="conformPassword"
          value={userInput.conformPassword}
          onChange={handleChange}
          required
        />
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
            "Reset"
          )}
        </Button>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
