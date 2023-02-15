import React, { useState, useEffect } from "react";

const AutoSlider = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const time = setInterval(() => setData((data) => (data + 1) % 4), 5000);
    return () => clearInterval(time);
  }, []);

  const slides = [
    {
      URL: "https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg",
      title: "Slide 1",
    },
    {
      URL: "https://apple.directd.com.my/images/thumbs/0002161_Webslider-Promo-Feb-iPhone-14-Apple%20(1).jpeg",
      title: "Slide 2",
    },
    {
      URL: "https://m.media-amazon.com/images/I/716UBzu+EAL._SX3000_.jpg",
      title: "Slide 3",
    },
    {
      URL: "https://apple.directd.com.my/images/thumbs/0002154_Webslider-Promo-Feb-iPhone-14-Pro-Apple.jpeg",
      titlw: "Slide 4",
    },
  ];

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <img src={slides[data].URL} alt={slides[data].title} />
      </div>
    </>
  );
};

export { AutoSlider };
