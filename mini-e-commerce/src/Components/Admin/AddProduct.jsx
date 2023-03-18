import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineUserAdd, AiOutlineGift } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const AddProduct = () => {
  const [imgUrl, setimgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [brand, setBrand] = useState("");
  const [qty, setQty] = useState("");
  const toast = useToast();

  const handleadd = async (e) => {
    e.preventDefault();
    const prodata = {
      imgUrl,
      title,
      price,
      brand,
      qty,
    };

    fetch("https://pear-naughty-clam.cyclic.app/iphone/createproduct", {
      // fetch("http://localhost:8080/iphone/createproduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(prodata),
    })
      .then((res) => {
        toast({
          position: "top",
          title: "Product Added SuccessFully ",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
            <Container
              p="25px"
              border="1px solid teal"
              m="auto"
              mt="20px"
              borderRadius="5px"
            >
              <Box>
                <Heading fontSize="25px" textAlign="center">
                  Add New Product
                </Heading>
              </Box>
              <form onSubmit={handleadd}>
                <FormControl mt="20px" isRequired>
                  <FormLabel mt="10px">Product Image</FormLabel>
                  <Input
                    type="url"
                    value={imgUrl}
                    name="url"
                    placeholder="Product Image Link"
                    onChange={(e) => setimgUrl(e.target.value)}
                  />
                  <FormLabel mt="10px">Title</FormLabel>
                  <Input
                    placeholder="Product Title"
                    type="text"
                    name="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <FormLabel mt="10px">Price</FormLabel>
                  <Input
                    placeholder="Product Price "
                    type="number"
                    name="Price"
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                  />

                  <FormLabel mt="10px">Brand</FormLabel>
                  <Input
                    placeholder="Product Brand "
                    name="Brand"
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />

                  <FormLabel mt="10px">Qty</FormLabel>
                  <Input
                    placeholder="qty"
                    type="number"
                    name="qty"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <Button
                    mt="20px"
                    colorScheme="purple"
                    w="full"
                    type="submit"
                    borderRadius="20px"
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export { AddProduct };
