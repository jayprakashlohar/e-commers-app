import { useDispatch, useSelector } from "react-redux";
import { fetchMobileData } from "../Redux/Products/action";
import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Styles from "../Styles/Product.module.css";
import { AiOutlineHeart } from "react-icons/ai";

const Mobile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Products.mobileData);
  //   console.log("data", data);

  useEffect(() => {
    dispatch(fetchMobileData());
  }, [dispatch]);

  return (
    <div>
      <Heading textAlign="center" margin="20px">
        Products
      </Heading>
      <div className={Styles.proContainer}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.imgUrl} alt="" />
              <h2>{item.brand}</h2>
              <h3>{item.title}</h3>
              <h3>{item.rate}</h3>
              <h3>₹ {item.price}</h3>
              <AiOutlineHeart
                style={{ float: "right", height: "25px", width: "25px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Mobile };
