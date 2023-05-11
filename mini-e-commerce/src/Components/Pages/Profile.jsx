import React from "react";
import { useJwt } from "react-jwt";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  let [userData, setUserData] = useState({ name: "", email: "" });
  const token = localStorage.getItem("token") || "";
  const { decodedToken, isExpired } = useJwt(token);
  // console.log("decodedToken", decodedToken);

  const getUserData = () => {
    axios
      .get("https://pear-naughty-clam.cyclic.app/user/getProfile", {
        headers: { token: token },
      })
      .then((res) => {
        let { name, email, _id } = res.data.res;
        setUserData({ ...userData, name, email, _id });
      })
      .catch((err) => {
        console.log("err :", err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Box display="block">
      <Box>
        <Text fontWeight="bold">{userData?.name}</Text>
      </Box>
      <Box>
        {" "}
        <Text mt={2}>{userData?.email}</Text>
      </Box>
    </Box>
  );
};

export { Profile };
