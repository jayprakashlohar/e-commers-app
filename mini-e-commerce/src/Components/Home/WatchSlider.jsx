import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";

const WatchSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const phoneimages = [
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UY218_.jpg",
      title: "Apple Watch Ultra",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71CrNuzQaHL._AC_UY218_.jpg",
      title: "Apple Watch Series 7",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY218_.jpg",
      title: "Apple Watch SE",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71nZ497gYtL._AC_UY218_.jpg",
      title: "Apple Watch SE",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_UY218_.jpg",
      title: "Apple Watch Series-8",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UY218_.jpg",
      title: "Apple Watch Ultra",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/810JR81LIsL._AC_UY218_.jpg",
      title: "Apple Watch",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/7194ZtL92zL._AC_UY218_.jpg",
      title: "Apple Watch Series-7",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/91Kd2PB5QsL._AC_UY218_.jpg",
      title: "Apple Watch Series-7",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/713BLl3u37L._AC_UY218_.jpg",
      title: "Apple Watch-7",
    },
  ];

  return (
    <Box>
      <div className="MainDiv">
        <div className="phoneSlider">
          <FaChevronLeft onClick={sliderRef?.slickPrev} className="leftIcon" />
          <FaChevronRight
            onClick={sliderRef?.slickNext}
            className="rightIcon"
          />
        </div>

        <Slider ref={setSliderRef} {...sliderSettings}>
          {phoneimages.map((card, index) => (
            <div key={index}>
              <Box m="5px" pt="10px" pb="10px" boxShadow="base">
                <img
                  style={{ margin: "auto" }}
                  src={card.imageSrc}
                  alt={card.title}
                />

                <p className="title">{card.title}</p>
              </Box>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export { WatchSlider };
