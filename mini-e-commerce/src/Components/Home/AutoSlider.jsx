import React, { useState, useEffect } from "react";

const AutoSlider = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const time = setInterval(() => setData((data) => (data + 1) % 4), 5000);
    return () => clearInterval(time);
  }, []);

  const slides = [
    {
      URL: "https://techmartme.com/wp-content/uploads/2021/10/006E-1.jpg",
      title: "Slide 1",
    },
    {
      URL: "https://techmartme.com/wp-content/uploads/2022/04/iphone-13-pro-green-2.jpg",

      title: "Slide 2",
    },
    {
      URL: "https://techmartme.com/wp-content/uploads/2021/11/010E.jpg",
      title: "Slide 3",
    },
    {
      URL: "https://techmartme.com/wp-content/uploads/2021/11/008E.jpg",
      title: "Slide 4",
    },
  ];

  return (
    <div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <img src={slides[data].URL} alt={slides[data].title} />
      </div>
    </div>
  );
};

export { AutoSlider };
