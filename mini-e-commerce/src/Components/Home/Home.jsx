import React from "react";
import { AutoSlider } from "./AutoSlider";
import { MultipalSlider } from "./MultipalSlider";
import { WatchSlider } from "./WatchSlider";

const Home = () => {
  return (
    <>
      <div>
        <AutoSlider />
        <div style={{ margin: "10px 0px 25px 0px" }}>
          <div style={{ margin: "0px 0px 10px 0px" }}>
            <img
              src="https://apple.directd.com.my/images/thumbs/0002161_Webslider-Promo-Feb-iPhone-14-Apple%20(1).jpeg"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://apple.directd.com.my/images/thumbs/0002154_Webslider-Promo-Feb-iPhone-14-Pro-Apple.jpeg"
              alt=""
            />
          </div>
          <MultipalSlider />
          <div style={{ margin: "20px, 0px 10px 0px" }}>
            <WatchSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
