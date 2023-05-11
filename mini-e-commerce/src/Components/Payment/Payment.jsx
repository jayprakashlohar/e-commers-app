import {
  Box,
  Flex,
  Heading,
  Input,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

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
import { Order } from "./Order";

const Payment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [landMark, setLandMark] = useState("");
  const [finalAddress, setFinalAddress] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          _hover={{ background: "black" }}
          cursor="pointer"
          onClick={onOpen}
          ml={{ base: "50px", md: "12px", lg: "150px" }}
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
                width={"80%"}
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
                  _hover={{ background: "#FF3399" }}
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

        <Order />

        {/* ------- ----------- ----------- ----------    */}
      </Flex>
    </div>
  );
};

export { Payment };
