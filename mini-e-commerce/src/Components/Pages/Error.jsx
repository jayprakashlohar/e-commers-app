import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Error = () => {
  return (
    <>
      <div className="ErrorDiv">
        <h1 className="errorCode">404 </h1>
        <p style={{ fontWeight: "bold", fontSize: "30px" }}>
          WE ARE SORRY PAGE NOT FOUND!
        </p>
        <p className="paragraph">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.{" "}
        </p>
        <Link to="/">
          <Button
            borderRadius="5px"
            fontWeight="bold"
            mt="10px"
            background="blue"
            color="white"
            _hover={{ background: "green" }}
          >
            Back To Homepage{" "}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Error;
