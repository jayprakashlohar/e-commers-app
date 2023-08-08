import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineUserAdd, AiOutlineGift } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";

const User = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    const res = await axios.get("https://pear-naughty-clam.cyclic.app/user");
    setData(res.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Box display="flex" h="100vh">
        <Box w="20%" boxShadow="base" background="lavender">
          <Image
            w="40%"
            m="auto"
            src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
          />
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            boxShadow="xs"
            p="10px"
            background="gray"
            color="#ffff"
            w="90%"
            m="auto"
            mt="20px"
            fontWeight="bold"
          >
            <AiOutlineHome />
            <Link to="/admin">
              {" "}
              <Text fontSize="20px">Home</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            boxShadow="xs"
            p="10px"
            background="gray"
            color="#ffff"
            w="90%"
            m="auto"
            mt="20px"
            fontWeight="bold"
          >
            <AiOutlineUserAdd />
            <Link to="/users">
              {" "}
              <Text fontSize="20px">User Info</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            boxShadow="xs"
            p="10px"
            background="gray"
            color="#ffff"
            w="90%"
            m="auto"
            mt="20px"
            fontWeight="bold"
          >
            <MdOutlineProductionQuantityLimits />
            <Link to="/addProduct">
              <Text fontSize="20px">Add Product</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            boxShadow="xs"
            p="10px"
            background="gray"
            color="#ffff"
            w="90%"
            m="auto"
            mt="20px"
            fontWeight="bold"
          >
            <AiOutlineGift />
            <Link to="/orders">
              {" "}
              <Text fontSize="20px">Orders</Text>
            </Link>
          </Box>
        </Box>
        <Box w="80%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            h="60px"
            p="20px"
            boxShadow="base"
            background="lavender"
          >
            <Text fontSize="25px" fontWeight="bold">
              Admin Dashboard
            </Text>
            <Menu>
              <MenuButton fontWeight="bold">Admin</MenuButton>
              <MenuList>
                <MenuItem>admin@gmail.com</MenuItem>
                <Link to="/adminlogin">
                  {" "}
                  <MenuItem>logout</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>

          {/* All Products */}
          <Box>
            <Box transition=".3s ease">
              <Flex
                as="header"
                align="center"
                justify="space-between"
                w="full"
                px="4"
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                borderBottomWidth="1px"
                borderColor="blackAlpha.300"
              ></Flex>

              <Box p="10px">
                <Heading fontSize="25px" textAlign="center">
                  Active Users
                </Heading>
                <Box w="full" h="auto" bg="#E9D8FD">
                  <Grid
                    p="5"
                    mt="10"
                    gap={5}
                    templateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(3, 1fr)",
                    ]}
                  >
                    {data.length > 0 &&
                      data.reverse().map((item) => (
                        <GridItem key={item._id}>
                          <Card maxW="sm">
                            <CardBody>
                              <Image
                                w="20%"
                                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                              />
                              <Stack mt="6" spacing="3">
                                <Heading size="md" cursor="pointer">
                                  User Name : {item.name}
                                </Heading>

                                <Text color="black" cursor="pointer">
                                  Email : {item.email}
                                </Text>
                              </Stack>
                            </CardBody>
                          </Card>
                        </GridItem>
                      ))}
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export { User };
