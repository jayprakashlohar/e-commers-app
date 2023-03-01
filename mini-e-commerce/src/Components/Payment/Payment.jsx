import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { React, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
} from "@chakra-ui/react";
import { Card } from "./Card";

const Payment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [landMark, setLandMark] = useState("");
  const [finalAddress, setFinalAddress] = useState(null);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleAddress = () => {
    let addressArray = [];
    let obj = {
      name: name,
      address: address,
      phone: phone,
      alternate_phone: altPhone,
      pincode: pincode,
      landMark: landMark,
    };
    addressArray.push(obj);
    setFinalAddress(addressArray);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        boxShadow="base"
        p="5px"
      >
        <Image
          w="8%"
          src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
        />
        <Text fontSize="27px" fontWeight="550">
          Checkout
        </Text>
      </Box>
      <Box p="10px">
        <Button
          bg="black"
          color={"white"}
          as="b"
          _hover="none"
          cursor="pointer"
          onClick={onOpen}
          ml="150px"
        >
          {finalAddress ? "CHANGE YOUR ADDRESS" : "ADD YOUR ADDRESS DETAILS"}
        </Button>
      </Box>
      <Box as="b">
        {finalAddress &&
          finalAddress.map((items) => {
            return (
              <Box
                textAlign={"left"}
                width={"90%"}
                m={["auto", "auto", "auto"]}
                boxShadow="base"
                p="10px"
              >
                <Heading color="#FF3399">ADDRESS</Heading>
                <Text>{`Name : ${items.name}`}</Text>
                <Text>{`phone : ${items.phone}`}</Text>
                <Text>{`Alternate : ${items.alternate_phone}`}</Text>
                <Text>{`Address : ${items.address}`}</Text>
                <Text>{`Landmark : ${items.landMark}`}</Text>
                <Text>{`Pincode : ${items.pincode}`}</Text>
              </Box>
            );
          })}
      </Box>
      <Flex
        color="white"
        flexDirection={["column", "column", "row", "row", "row"]}
        mt={"20px"}
        gap={"20px"}
        mx={["20px", "20px", "20px", "30px", "10%"]}
      >
        <Box color={"black"}>
          <Modal isOpen={isOpen} onClose={onClose} size="6xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>ADDRESS</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Name*</Text>
                <Input
                  bg="#F3F3F3"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Input>
                <Text>Address*</Text>
                <Input
                  bg="#F3F3F3"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></Input>
                <Flex
                  flexDirection={["column", "column", "column", "row", "row"]}
                >
                  <Box width={["100%", "100%", "100%", "50%", "50%"]} p="15px">
                    <VStack
                      divider={<StackDivider borderColor="gray.200" />}
                      spacing={4}
                      align="stretch"
                    >
                      <Box>
                        <Text>Phone Number*</Text>
                        <Input
                          bg="#F3F3F3"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        ></Input>
                      </Box>
                      <Box>
                        <Text>Pincode*</Text>
                        <Input
                          bg="#F3F3F3"
                          value={pincode}
                          onChange={(e) => {
                            setPincode(e.target.value);
                          }}
                        ></Input>
                      </Box>
                    </VStack>
                  </Box>
                  <Box width={["100%", "100%", "100%", "50%", "50%"]} p="15px">
                    <VStack
                      divider={<StackDivider borderColor="gray.200" />}
                      spacing={4}
                      align="stretch"
                    >
                      <Box>
                        <Text>Alternate Number*</Text>
                        <Input
                          bg="#F3F3F3"
                          value={altPhone}
                          onChange={(e) => {
                            setAltPhone(e.target.value);
                          }}
                        ></Input>
                      </Box>
                      <Box>
                        <Text>LandMark*</Text>
                        <Input
                          bg="#F3F3F3"
                          value={landMark}
                          onChange={(e) => {
                            setLandMark(e.target.value);
                          }}
                        ></Input>
                      </Box>
                    </VStack>
                  </Box>
                </Flex>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    handleAddress();
                    onClose();
                  }}
                  bg={"#FF3399"}
                  variant="ghost"
                  color="#ffff"
                  _hover="none"
                >
                  Save
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
   {/* --------- --------- ------------ */}
          <Card />
   {/* ------- ------------ -------------- */}

        <Box width={["100%", "100%", "30%", "30%", "30%"]} border="1px solid red">
          <Box bg={"#F2F2F2"} color={"black"} p={"5px"} mt={"20px"}>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={2}
              align="stretch"
              m={"20px"}
            >
              <Box h="40px">
                <Heading as="h3" size="sm" textAlign={"left"}>
                  OVERVIEW
                </Heading>
              </Box>
              <Box h="20px">
                <HStack p={"0"} justifyContent={"space-between"}>
                  <Box h="40px">
                    <p>Subtotal</p>
                  </Box>
                  <Box fontWeight={"bold"}>
                    <p>Rs.</p>
                  </Box>
                </HStack>
              </Box>
              <Box h="20px">
                <HStack
                  p={"0"}
                  justifyContent={"space-between"}
                  color={"#FF3399"}
                >
                  <Box h="40px">
                    <p>DISCOUNT</p>
                  </Box>
                  <Box fontWeight={"bold"}>
                    <p>Rs.</p>
                  </Box>
                </HStack>
              </Box>
              <Box h="20px">
                <HStack p={"0"} justifyContent={"space-between"}>
                  <Box h="40px">
                    <p>GST</p>
                  </Box>
                  <Box fontWeight={"bold"}>
                    <p>Rs.{"0"}</p>
                  </Box>
                </HStack>
              </Box>
              <Box h="20px">
                <HStack p={"0"} justifyContent={"space-between"}>
                  <Box h="40px">
                    <p>Delivery Charges</p>
                  </Box>
                  <Box fontWeight={"bold"}>
                    <p>Rs.{"0"}</p>
                  </Box>
                </HStack>
              </Box>
              <Box borderBottom="2px solid black"></Box>
              <Box h="30px">
                <HStack
                  p={"0"}
                  justifyContent={"space-between"}
                  fontWeight={"bold"}
                >
                  <Box h="40px">
                    <p>Total</p>
                  </Box>
                  <Box fontWeight={"bold"}>
                    <p>Rs.</p>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>

          <Box
            mt={"20px"}
            width={"100%"}
            h={"30px"}
            bg={"#f39"}
            fontWeight={"bold"}
            pt={"10px"}
            pb={"30px"}
          >
            <Link
              to={"/#"}
              onClick={() => {
                finalAddress
                  ? toast({
                      title: "SUCCESS",
                      description: "order placed successfully",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                      position: "top",
                    })
                  : toast({
                      title: "ERROR",
                      description: "Please Enter valid address details",
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                    });
                alert("Your order is placed successfully 🎁");
                navigate("/");
              }}
            >
              PLACE ORDER
            </Link>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export { Payment };
