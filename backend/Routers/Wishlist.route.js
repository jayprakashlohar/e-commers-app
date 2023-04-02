const express = require("express");
const { WishlistModel } = require("../Models/Wishlist.model");
const wishlistRouter = express.Router();
const jwt = require("jsonwebtoken");

//Get all product
wishlistRouter.get("/", async (req, res) => {
  const token = req.headers?.token;
  const decoded = await jwt.verify(token, "secret");
  let userId = decoded.userID;

  const product = await WishlistModel.find();
  if (product) {
    let data = product.filter((item) => {
      let { userIds } = item;
      let isExit = userIds.find((id) => id == userId);
      if (isExit) {
        return item;
      }
    });
    res.send(data);
  } else {
    res.send(product);
  }
});

//Find by id
wishlistRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await WishlistModel.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add Product
wishlistRouter.post("/createproduct", async (req, res) => {
  const token = req.headers?.token;
  console.log("token", token);
  const decoded = await jwt.verify(token, "secret");
  let userId = decoded.userID;
  try {
    const payload = req.body;
    const { _id } = payload;

    const product = await WishlistModel.findOne({ _id });
    // console.log(product);

    if (product) {
      let { userIds } = product;
      let isExit = userIds.find((id) => userId == id);
      // console.log("isExit", isExit);
      if (isExit) {
        res.status(201).send({ msg: "Product Already In Wishlist" });
      } else {
        product.userIds.push(userId);
        // console.log("pro",product)
        const new_product = new WishlistModel(product);
        await new_product.save();
        res.status(200).send({ msg: "Added To Wishlist" });
      }
    } else {
      let userIds = [];
      userIds.push(userId);
      payload.userIds = userIds;
      const new_product = new WishlistModel(payload);
      await new_product.save();
      res.status(200).send({ msg: "Added To Wishlist" });
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

// Delete Product
wishlistRouter.delete("/delete/:id", async (req, res) => {
  const token = req.headers?.token;
  const decoded = await jwt.verify(token, "secret");
  let userId = decoded.userID;
  try {
    const product = await WishlistModel.findById({ _id: req.params.id });
    if (product) {
      let { userIds } = product;
      let isExit = userIds.find((id) => userId == id);
      // console.log("isExit", isExit);
      if (isExit) {
        const index = userIds.indexOf(userId);
        userIds.splice(index, 1);
        product.userIds = userIds;
        const new_product = new WishlistModel(product);
        await new_product.save();
        res.status(200).send({ msg: "Removed From Wishlist" });
      } else {
        res.status(201).send({ msg: "Product not in Wishlist" });
      }
    } else {
      res.status(201).send({ msg: "Product not in Wishlist" });
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

module.exports = { wishlistRouter };
