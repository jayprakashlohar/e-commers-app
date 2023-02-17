import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

export default class SimpleSlider extends Component {
  render() {
    const state = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Box p="0" m="0" boxSizing="border-box">
        <Slider {...state}>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://www.businessmobiles.com/wp-content/uploads/2022/09/Bottom-image-iPhone-14-Available.jpg"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://i.pinimg.com/originals/a9/2c/53/a92c53d10db3113c841c99f4ae9efa70.png"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://www.businessmobiles.com/wp-content/uploads/2022/09/Bottom-image-iPhone-14-Available.jpg"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://techmartme.com/wp-content/uploads/2022/04/iphone-13-pro-green-2.jpg"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://www.businessmobiles.com/wp-content/uploads/2022/09/Bottom-image-iPhone-14-Available.jpg"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://i.pinimg.com/originals/a9/2c/53/a92c53d10db3113c841c99f4ae9efa70.png"
            />
          </Box>
        </Slider>
      </Box>
    );
  }
}
