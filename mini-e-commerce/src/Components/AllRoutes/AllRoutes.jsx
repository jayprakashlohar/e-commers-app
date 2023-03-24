import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Cart } from "../Cart/Cart";
import { Home } from "../Home/Home";
import { MobileProducts } from "../Pages/MobileProducts";
import { Wishlist } from "../Pages/Wishlist";
import { ProductsDetails } from "../Pages/ProductsDetails";
import { Payment } from "../Payment/Payment";
import { ThankYou } from "../Pages/ThankYou";
import { PrivateRoute } from "./PrivateRoute";
import { AddProduct } from "../Admin/AddProduct";
import { User } from "../Admin/User";
import { EditProduct } from "../Admin/EditProduct";
import { AdminLogin } from "../Admin/AdminLogin";
import { Admin } from "../Admin/Admin";
import { Orders } from "../Admin/Orders";
import { Layout } from "./Layout";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Home />
            </Layout>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Layout>
              {" "}
              <Login />
            </Layout>
          }
        ></Route>

        <Route
          path="/wishlist"
          element={
            <Layout>
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            </Layout>
          }
        ></Route>

        <Route
          path="/appleproducts"
          element={
            <Layout>
              {" "}
              <MobileProducts />
            </Layout>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <Layout>
              <ProductsDetails />
            </Layout>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              {" "}
              <Layout>
                <Cart />
              </Layout>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <Layout>
              <Payment />
            </Layout>
          }
        ></Route>
        <Route
          path="/thankyou"
          element={
            <Layout>
              <ThankYou />
            </Layout>
          }
        ></Route>

        {/* Admin */}
        <Route
          path="/adminlogin"
          element={
            <Layout>
              <AdminLogin />
            </Layout>
          }
        ></Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/adminedit/:id" element={<EditProduct />} />
        <Route path="/users" element={<User />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </>
  );
};

export { AllRoutes };
