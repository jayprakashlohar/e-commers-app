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
      <Box>
        <Slider {...state}>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d2c9564b8101c59f.jpg?q=50"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d2c9564b8101c59f.jpg?q=50"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d2c9564b8101c59f.jpg?q=50"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d2c9564b8101c59f.jpg?q=50"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d2c9564b8101c59f.jpg?q=50"
            />
          </Box>
          <Box>
            <Image
              w="full"
              h="300px"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d2c9564b8101c59f.jpg?q=50"
            />
          </Box>
        </Slider>
      </Box>
    );
  }
}
