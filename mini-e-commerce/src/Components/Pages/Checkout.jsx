import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

const Checkout = () => {
  const [formData, setFormData] = useState("");

  return (
    <Box>
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

      {/* --------------------- ----------------- ------------------ -------- */}
      <Box m="20px 0px 20px 20px" w="50%" p="30px" boxShadow="outline">
        <FormControl>
          <Heading fontSize="30px" m="10px 0px 20px 0px">
            Add a new address
          </Heading>
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select Country">
            <option>United Arab Emirates</option>
            <option>India</option>
            <option>Taiwan</option>
            <option>Asia</option>
            <option>UK</option>
            <option>US</option>
          </Select>
          <FormLabel>Full name (First and Last name)</FormLabel>
          <Input type="text" placeholder="Enter Your Full Name" />
          <FormLabel>Street number</FormLabel>
          <Input type="number" placeholder="Street Address" />
          <FormLabel>City</FormLabel>
          <Input type="text" placeholder="Enter Your City" />
          <FormLabel>State / Province / Region</FormLabel>
          <Input type="text" placeholder="Enter Your State" />
          <FormLabel>Pin Code</FormLabel>
          <Input type="number" placeholder="Enter Your Pin Code" />
          <FormLabel>Phone Number</FormLabel>
          <Input type="number" placeholder="Enter Your Mobile Number" />
          <Button w="full" mt="20px" type="submit">
            Add
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export { Checkout };
