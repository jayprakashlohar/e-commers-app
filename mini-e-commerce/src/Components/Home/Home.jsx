import React from "react";
import { AutoSlider } from "./AutoSlider";
import { MultipalSlider } from "./MultipalSlider";
import { WatchSlider } from "./WatchSlider";
import phone from "../../assets/phone.png";

const Home = () => {
  return (
    <>
      <div>
        <AutoSlider />
        <div style={{ margin: "10px 0px 25px 0px" }}>
          <div>
            <div style={{ margin: "10px 0px 0px 0px", width: "100%" }}>
              <img style={{ width: "100%" }} src={phone} alt="" />
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*3LJmfM1VUuhn8oDghUlsYA.jpeg"
                alt=""
              />
            </div>
            <div style={{ padding: "5px", background: "black" }}></div>
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
          <div>
            <img
              style={{ width: "100%" }}
              src="https://i.stack.imgur.com/VzT4T.gif"
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
