import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Products/action";
import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Styles from "../Styles/Product.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Products.productData);
  console.log("data", data);

  useEffect(() => {
    dispatch(fetchData());
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
              <h3>{item.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Products };
