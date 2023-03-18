import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Header/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
