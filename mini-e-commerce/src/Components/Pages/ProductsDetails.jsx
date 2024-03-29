import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../Redux/Products/action";
import { useEffect } from "react";
import { Button, useToast, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Styles from "../Styles/Product.module.css";
import { addToCart } from "../Redux/Products/action";
import { Spinner } from "@chakra-ui/react";

const ProductsDetails = () => {
  let token = localStorage.getItem("token");
  const toast = useToast();
  const dispatch = useDispatch();
  const { singleProducts: data, isLoading } = useSelector(
    (state) => state.Products
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [dispatch]);

  const handleCart = (data) => {
    if (token) {
      dispatch(addToCart(token, data))
        .then((res) => {
          toast({
            title: res,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((err) => {
          toast({
            title: err,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        });
    } else {
      toast({
        title: "Please Login First",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <div className={Styles.topDiv}>
        <p className={Styles.name}>iPhone</p>
        <img
          src="https://m.media-amazon.com/images/I/31z9RgPMrsL._FMpng_SY85_.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/I/31UA+MH3xzL._FMpng_SY85_.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/I/31wQS465YJL._FMpng_SY85_.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/I/31PrI7blgdL._FMpng_SY85_.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/I/3106zj7rkHL._FMpng_SY85_.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/I/31uqaf+EONL._FMpng_SY85_.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/I/31vyLKKiIKL._FMpng_SY85_.png"
          alt=""
        />
        <img
          src="https://m.media-amazon.com/images/I/31PrI7blgdL._FMpng_SY85_.png"
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </div>
      <div className={Styles.mainContainer}>
        <div className={Styles.imageDiv}>
          <img src={data && data.imgUrl} alt="" />
        </div>
        <Box
          w={{ base: "98%", lg: "400px" }}
          boxShadow="base"
          p="20px"
          m="auto"
        >
          <h3 className={Styles.title1}>{data && data.title}</h3>
          <h3 className={Styles.price}>₹ {data && data.price}</h3>
          <h2 className={Styles.brand}>Visit the {data && data.brand} Store</h2>
          <h3>{data && data.rate}</h3>
          <p className={Styles.stock}>
            Available - <span style={{ color: "green" }}>In Stock</span>
          </p>
          <p className={Styles.color}>Color:</p>
          <div className={Styles.colorDiv}>
            <Button mr="5px" borderRadius="100%" bg="black"></Button>
            <Button mr="5px" borderRadius="100%" bg="red"></Button>
            <Button mr="5px" borderRadius="100%" bg="purple"></Button>
            <Button mr="5px" borderRadius="100%" bg="blue"></Button>
            <Button mr="5px" borderRadius="100%" bg="gray"></Button>
          </div>
          <p className={Styles.color}>Size:</p>
          <div className={Styles.colorDiv}>
            <p className={Styles.size}>64 GB</p>
            <p className={Styles.size1}>128 GB</p>
            <p className={Styles.size2}>256 GB</p>
          </div>
          <Button
            w="full"
            m="15px 0px 10px 0px"
            _hover={{ background: "#ffcc01" }}
            borderRadius="40px"
            bg="#ffcc00"
            onClick={() => handleCart(data)}
          >
            Add To Cart
          </Button>{" "}
          <br />
          <Button
            w="full"
            m="0px 0px 15px 0px"
            _hover={{ background: "#ff9900" }}
            borderRadius="40px"
            bg="#ff9900"
          >
            Buy Now
          </Button>
        </Box>
      </div>
    </>
  );
};

export { ProductsDetails };

// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Image,
//   Spinner,
//   Stack,
//   Text,
//   useColorModeValue,
//   useToast,
//   VStack,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { MdLocalShipping } from "react-icons/md";
// import { singleProduct, addToCart } from "../Redux/Products/action";
// import Styles from "../Styles/Product.module.css";

// function ProductsDetails() {
//   const token = localStorage.getItem("token");
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const { singleProducts: data, isLoading } = useSelector(
//     (state) => state.Products
//   );
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(singleProduct(id));
//   }, [dispatch]);

//   const handleCart = (data) => {
//     if (token) {
//       dispatch(addToCart(token, data))
//         .then((res) => {
//           toast({
//             title: res,
//             status: "success",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         })
//         .catch((err) => {
//           toast({
//             title: err,
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         });
//     } else {
//       toast({
//         title: "Please Login First",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   return (
//     <Container maxW={"7xl"}>
//       <Stack
//         direction={{ base: "column", lg: "row" }}
//         spacing={{ base: 8, md: 10 }}
//         py={{ base: 18, md: 24 }}
//       >
//         <Flex>
//           <Image
//             rounded={"md"}
//             alt={"product image"}
//             src={
//               "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
//             }
//             fit={"cover"}
//             align={"center"}
//             w={"100%"}
//             h={{ base: "100%", sm: "400px", lg: "500px" }}
//           />
//         </Flex>
//         <VStack spacing={{ base: 6, md: 10 }} align="start">
//           <Box as={"header"}>
//             <Heading
//               lineHeight={1.1}
//               fontWeight={600}
//               fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
//             >
//               {data && data.title}
//             </Heading>
//             <Text
//               color={useColorModeValue("gray.900", "gray.400")}
//               fontWeight={300}
//               fontSize={"2xl"}
//             >
//               ₹ {data && data.price}
//             </Text>
//           </Box>

//           {/* ... (Product Description, Features, Product Details) */}

//           <Button
//             rounded={"none"}
//             w={"full"}
//             mt={8}
//             size={"lg"}
//             py={"7"}
//             bg={useColorModeValue("gray.900", "gray.50")}
//             color={useColorModeValue("white", "gray.900")}
//             textTransform={"uppercase"}
//             _hover={{
//               transform: "translateY(2px)",
//               boxShadow: "lg",
//             }}
//             onClick={() => handleCart(data)}
//           >
//             Add to cart
//           </Button>

//           <Stack direction="row" alignItems="center" justifyContent={"center"}>
//             <MdLocalShipping />
//             <Text>2-3 business days delivery</Text>
//           </Stack>

//           {/* Customer Reviews */}
//           <Box mt={8}>
//             <Text
//               fontSize={{ base: "16px", lg: "18px" }}
//               color={useColorModeValue("yellow.500", "yellow.300")}
//               fontWeight={"500"}
//               textTransform={"uppercase"}
//               mb={"4"}
//             >
//               Customer Reviews
//             </Text>
//             <VStack spacing={4}>
//               <Flex alignItems="center">
//                 <Image
//                   src={"https://randomuser.me/api/portraits/men/32.jpg"}
//                   alt={"User"}
//                   boxSize={12}
//                   rounded={"full"}
//                 />
//                 <VStack alignItems="flex-start" spacing={1}>
//                   <Text fontWeight="bold">John Doe</Text>
//                   <Text fontSize="sm">Rated 4 out of 5 stars</Text>
//                 </VStack>
//               </Flex>
//               <Text>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 eget commodo eros, a vehicula nisl. In hac habitasse platea
//                 dictumst.
//               </Text>
//             </VStack>
//           </Box>
//         </VStack>
//       </Stack>
//     </Container>
//   );
// }

// export { ProductsDetails };
