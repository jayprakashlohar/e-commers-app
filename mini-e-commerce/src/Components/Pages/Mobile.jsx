import { useDispatch, useSelector } from "react-redux";
import {
  fetchMobileData,
  sortbyPrice,
  filterbyTitle,
} from "../Redux/Products/action";
import { useEffect, useState } from "react";
import { Heading, Select, Spinner } from "@chakra-ui/react";
import Styles from "../Styles/Product.module.css";
import { AiOutlineHeart } from "react-icons/ai";

const Mobile = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let { mobileData } = useSelector((state) => state.Products);
  let data = mobileData;

  useEffect(() => {
    dispatch(fetchMobileData());
    setLoading(false);
  }, [dispatch]);

  const handleSort = (value) => {
    dispatch(sortbyPrice(value));
  };

  const handleFilter = (value) => {
    dispatch(filterbyTitle(value));
  };

  return (
    <>
      <Heading textAlign="center" margin="20px">
        Products
      </Heading>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}

      <div className={Styles.filterDiv}>
        <div>
          <Select onChange={(e) => handleFilter(e.target.value)}>
            <option value="All">Filter By Model</option>
            <option value="Apple iPhone 11">I PHONE-11</option>
            <option value="Apple iPhone 12">I PHONE-12</option>
            <option value="Apple iPhone 13">I PHONE-13</option>
            <option value="Apple iPhone 14">I PHONE-14</option>
          </Select>
        </div>
        <div>
          <Select onChange={(e) => handleSort(e.target.value)}>
            <option value="">Sort By Price</option>
            <option value="desc">High To Low</option>
            <option value="asc">Low To High</option>
          </Select>
        </div>
      </div>
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
    </>
  );
};

export { Mobile };
