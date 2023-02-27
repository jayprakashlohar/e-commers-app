// import React from "react";
// import { useJwt } from "react-jwt";
// import { Flex, Heading, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Profile = () => {
//   let [userData, setUserData] = useState({ name: "", email: "" });
//   const token = JSON.parse(localStorage.getItem("token")) || "";
//   const { decodedToken, isExpired } = useJwt(token);

//   const getUserData = () => {
//     axios
//       .get("https://pear-naughty-clam.cyclic.app/user/getProfile", {
//         headers: { token: token },
//       })
//       .then((res) => {
//         console.log(res);
//         let { name, email } = res.data.res;
//         setUserData({ ...userData, name, email });
//       })
//       .catch((err) => {
//         console.log("err :", err);
//       });
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   return (
//     <>
//       <Flex
//         m="30px 0"
//         justifyContent="center"
//         alignItems="center"
//         flexDirection="column"
//       >
//         <Heading mt={4}>{userData?.name}</Heading>
//         <Text mt={2}>{userData?.email}</Text>
//       </Flex>
//     </>
//   );
// };

// export { Profile };
