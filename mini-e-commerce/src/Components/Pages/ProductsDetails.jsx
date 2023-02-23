import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../Redux/Products/action";
import { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Products.singleProducts);
  // console.log("data", data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [dispatch]);

  return (
    <>
      <Box>
        <Heading m="20px" textAlign="center">
          Single Products Page
        </Heading>
        <Box>
          <img src={data.imgUrl} alt="" />
          <h2>{data.brand}</h2>
          <h3>{data.title}</h3>
          <h3>{data.rate}</h3>
          <h3>₹ {data.price}</h3>
        </Box>
      </Box>
    </>
  );
};

export { ProductsDetails };
