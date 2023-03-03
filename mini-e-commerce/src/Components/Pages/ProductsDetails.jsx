import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../Redux/Products/action";
import { useEffect } from "react";
import { Button, useToast,Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Styles from "../Styles/Product.module.css";
import { addToCart } from "../Redux/Products/action";

const ProductsDetails = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Products.singleProducts);

  const { id } = useParams();

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [dispatch]);

  const handleCart = (data) => {
    dispatch(addToCart(data))
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
      

      <div className={Styles.mainContainer}>
        <div className={Styles.imageDiv}>
          <img src={data.imgUrl} alt="" />
        </div>
        <div className={Styles.detailsDiv}>
          <h3 className={Styles.title1}>{data.title}</h3>
          <h3 className={Styles.price}>₹ {data.price}</h3>
          <h2 className={Styles.brand}>Visit the {data.brand} Store</h2>
          <h3>{data.rate}</h3>
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
            _hover="none"
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
            _hover="none"
            borderRadius="40px"
            bg="#ff9900"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
};

export { ProductsDetails };
