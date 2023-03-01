import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  FormLabel,
  Heading,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { CartTotal } from "../Cart/CartTotal";

let initialField = {
  country: "",
  name: "",
  number: "",
  city: "",
  state: "",
  pincode: "",
  mobile: "",
};

const Checkout = () => {
  const [formData, setFormData] = useState(initialField);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("addressData", JSON.stringify(formData));
  };

  return (
    <>
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
      <Box display="flex" justifyContent="space-around">
        <Box w="40%" p="25px" m="30px 0px 30px 0px" boxShadow="outline">
          <form onSubmit={handleSubmit}>
            <Heading fontSize="30px" m="10px 0px 20px 0px">
              Add a new address
            </Heading>
            <FormLabel>Country</FormLabel>
            <Select
              placeholder="Select Country"
              name="country"
              onChange={handleInputChange}
              value={formData.country}
            >
              <option>United Arab Emirates</option>
              <option>India</option>
              <option>Taiwan</option>
              <option>Asia</option>
              <option>UK</option>
              <option>US</option>
            </Select>
            <FormLabel>Full name (First and Last name)</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Full Name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
            />
            <FormLabel>Street number</FormLabel>
            <Input
              type="number"
              placeholder="Street Address"
              name="number"
              onChange={handleInputChange}
              value={formData.number}
            />
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your City"
              name="city"
              onChange={handleInputChange}
              value={formData.city}
            />
            <FormLabel>State / Province / Region</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your State"
              name="state"
              onChange={handleInputChange}
              value={formData.state}
            />
            <FormLabel>Pin Code</FormLabel>
            <Input
              type="number"
              placeholder="Enter Your Pin Code"
              name="pincode"
              onChange={handleInputChange}
              value={formData.pincode}
            />
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter Your Mobile Number"
              name="mobile"
              onChange={handleInputChange}
              value={formData.mobile}
            />
            <Button w="full" mt="20px" type="submit">
              Add
            </Button>
          </form>
        </Box>
        <Box>
          <CartTotal />
        </Box>
      </Box>
    </>
  );
};

export { Checkout };
