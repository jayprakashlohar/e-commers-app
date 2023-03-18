import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineUserAdd, AiOutlineGift } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  useToast,
  Image,
  Text,
} from "@chakra-ui/react";

const Orders = () => {
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
                <MenuItem>logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          {/* All Products */}
          <Box></Box>
        </Box>
      </Box>
    </div>
  );
};

export { Orders };
