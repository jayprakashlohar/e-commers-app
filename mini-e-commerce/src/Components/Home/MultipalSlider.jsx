import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MultipalSlider = () => {
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
          slidesToShow: 2,
        },
      },
    ],
  };

  const phoneimages = [
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/610pghkO81L._AC_UY218_.jpg",
      title: "I phone - 14 pro max",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/716fAVud8PL._AC_UY218_.jpg",
      title: "I phone - 14 pro",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/610pghkO81L._AC_UY218_.jpg",
      title: "I phone - 14",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY218_.jpg",
      title: "I phone - 14",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg",
      title: "I phone - 13 pro max",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/610pghkO81L._AC_UY218_.jpg",
      title: "I phone - 13",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg",
      title: "I phone - 13 pro",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UY218_.jpg",
      title: "I phone - 12 pro max",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg",
      title: "I phone - 12 pro",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY218_.jpg",
      title: "I phone - 12",
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
                <Link to="/appleproducts">
                  <img
                    style={{ margin: "auto" }}
                    src={card.imageSrc}
                    alt={card.title}
                  />
                </Link>

                <p className="title">{card.title}</p>
              </Box>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export { MultipalSlider };
