import React from "react";
import { AutoSlider } from "./AutoSlider";
import SimpleSlider from "./SimpleSlider";
import { Products } from "../Pages/Products";

const Home = () => {
  return (
    <>
      <div>
        <AutoSlider />
        <div style={{ margin: "10px 0px 25px 0px" }}>
          <SimpleSlider />
          <Products />
        </div>
      </div>
    </>
  );
};

export { Home };
