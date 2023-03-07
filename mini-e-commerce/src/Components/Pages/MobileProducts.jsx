import { useDispatch, useSelector } from "react-redux";
import {
  fetchMobileData,
  sortbyPrice,
  filterbyTitle,
  addToWishlist,
  fetchwishlistData,
} from "../Redux/Products/action";
import { useEffect, useState } from "react";
import { Heading, Select, Spinner, useToast } from "@chakra-ui/react";
import Styles from "../Styles/Product.module.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileProducts = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let { mobileData, wishlistData } = useSelector((state) => state.Products);
  let data = mobileData;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMobileData(page));
    dispatch(fetchwishlistData);
    setLoading(false);
  }, [dispatch, page]);

  const handleSort = (value) => {
    dispatch(sortbyPrice(value));
  };

  const handleFilter = (value) => {
    dispatch(filterbyTitle(value, page));
  };

  const handleWishItem = (item) => {
    dispatch(addToWishlist(item))
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
      <Heading textAlign="center" margin="20px">
        Products
      </Heading>

      <div className={Styles.filterDiv}>
        <div className={Styles.firstDivv}>
          <Select
            w={{ base: "150px", lg: "300px" }}
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="All">Filter By Model</option>
            <option value="Apple iPhone 11">I PHONE-11</option>
            <option value="Apple iPhone 12">I PHONE-12</option>
            <option value="Apple iPhone 13">I PHONE-13</option>
            <option value="Apple iPhone 14">I PHONE-14</option>
          </Select>
        </div>
        <div>
          <Select
            w={{ base: "150px", lg: "300px" }}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort By Price</option>
            <option value="desc">High To Low</option>
            <option value="asc">Low To High</option>
          </Select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </div>

      <div className={Styles.proContainer}>
        {data.map((item) => {
          const [isAvailable] = wishlistData.filter(
            (find) => find._id === item._id
          );
          return (
            <div key={item.id}>
              <Link to={`/products/${item._id}`}>
                <img src={item.imgUrl} alt="" />
              </Link>
              <h2>{item.brand}</h2>
              <h3 className={Styles.title}>{item.title}</h3>
              <h3>{item.rate}</h3>
              <h3>₹ {item.price}</h3>
              <AiTwotoneHeart
                className={isAvailable ? "addedWishlist" : "wishIcon"}
                style={{ float: "right", height: "25px", width: "25px" }}
                onClick={() => handleWishItem(item)}
              />
            </div>
          );
        })}
      </div>

      <div className={Styles.paginationDiv}>
        <button onClick={() => setPage(page - 1)} disabled={page - 1 == 0}>
          Prev
        </button>
        <button>{page}</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export { MobileProducts };
