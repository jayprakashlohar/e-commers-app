import React, { useState, useEffect } from "react";

const AutoSlider = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const time = setInterval(() => setData((data) => (data + 1) % 3), 5000);
    return () => clearInterval(time);
  }, []);

  const slides = [
    {
      URL: "https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg",
      title: "Slide 1",
    },
    {
      URL: "https://m.media-amazon.com/images/I/61l4i7aoY2L._SX3000_.jpg",
      title: "Slide 2",
    },
    {
      URL: "https://m.media-amazon.com/images/I/716UBzu+EAL._SX3000_.jpg",
      title: "Slide 3",
    },
  ];

  return (
    <div>
      <img src={slides[data].URL} alt={slides[data].title} />
    </div>
  );
};

export { AutoSlider };
