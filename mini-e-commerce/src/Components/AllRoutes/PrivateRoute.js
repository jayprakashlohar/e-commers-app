import React from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function PrivateRoute({ children }) {
  const toast = useToast();
  let token = localStorage.getItem("token");
  if (!token) {
    toast({
      title: "Please Login First ",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });

    return <Navigate to={"/login"} />;
  }
  return <div>{children}</div>;
}

export { PrivateRoute };
