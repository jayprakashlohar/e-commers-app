import React, { useEffect, useState } from "react";
import { Box, Grid, Image, Text, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineGift,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const toast = useToast();
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    let product = await axios.get(
      "https://pear-naughty-clam.cyclic.app/iphone/all"
    );
    setData(product.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are You Sure Delete This Product")) {
      const res = await axios.delete(
        `https://pear-naughty-clam.cyclic.app/iphone/delete/${id}`
      );

      toast({
        position: "top",
        title: "Product deteted",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Box display="flex" h="100vh">
        <Box w="20%" boxShadow="base" background="lavender">
          <Link to="/">
            {" "}
            <Image
              w="40%"
              m="auto"
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
            />
          </Link>
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
            _hover={{ background: "black", color: "white" }}
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
            _hover={{ background: "black", color: "white" }}
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
            _hover={{ background: "black", color: "white" }}
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
            _hover={{ background: "black", color: "white" }}
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
            <Grid templateColumns="repeat(4, 1fr)" gap={4} mt="20px" ml="10px">
              {data &&
                data.map((item) => {
                  return (
                    <Box key={item._id} p="20px" boxShadow="base">
                      <img src={item.imgUrl} alt={item.title} />
                      <p>{item.title}</p>
                      <p>{item.brand}</p>
                      <p>{item.price}</p>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        mt="10px"
                      >
                        <Link to={`/adminedit/${item._id}`}>
                          <Button color="#9F7AEA" fontSize="28px">
                            <AiFillEdit className="editIcon" />
                          </Button>
                        </Link>

                        <AiFillDelete
                          className="deleteIcon"
                          onClick={() => handleDelete(item._id)}
                        />
                      </Box>
                    </Box>
                  );
                })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export { Admin };
