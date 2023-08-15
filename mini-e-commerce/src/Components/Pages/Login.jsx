import {
  FormLabel,
  Input,
  useToast,
  Box,
  Heading,
  Button,
  Text,
  Spinner,
} from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../Redux/Auth/action";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.Auth.userLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin(formData))
      .then((res) => {
        toast({
          title: res.data.msg,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
      })
      .catch((error) => {
        toast({
          title: error.response.data.response,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };
  return (
    <Box pt="35px" h={{ base: "118vh", sm: "100vh", lg: "100vh" }}>
      <Box
        margin="auto"
        padding="25px"
        boxShadow="dark-lg"
        p="8"
        rounded="md"
        w={{ base: "90%", sm: "50%", md: "80%", lg: "30%" }}
      >
        <Heading textAlign="center" mb="30px" fontFamily="cursive">
          Login
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormLabel fontFamily="cursive">Email </FormLabel>

          <Input
            variant="flushed"
            type={"email"}
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            required={true}
          />

          <FormLabel m="10px 0px 10px 0px" fontFamily="cursive">
            Password{" "}
          </FormLabel>

          <Input
            variant="flushed"
            type={"password"}
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            required={true}
          />
          <Link to="/forgot-password">
            <Text
              float="right"
              fontSize="12px"
              mt="5px"
              fontWeight="400"
              cursor="pointer"
              fontFamily="cursive"
              _hover={{ color: "blue" }}
            >
              Forgot password?
            </Text>
          </Link>

          <Button
            w="100%"
            marginTop="25px"
            borderRadius="20px"
            bg="black"
            _hover={{ background: "black.500" }}
            color="#fff"
            type="submit"
          >
            {" "}
            {loading ? (
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="sm"
              />
            ) : (
              "LOGIN"
            )}
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
            color: "blue",
            textAlign: "center",
            fontWeight: "bold",
            cursor: "pointer",
            fontFamily: "cursive",
          }}
        >
          {" "}
          Sign up
        </p>
      </Box>
    </Box>
  );
};

export { Login };
