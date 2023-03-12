const express = require("express");
const { WishlistModel } = require("../Models/Wishlist.model");
const wishlistRouter = express.Router();

//Get all product
wishlistRouter.get("/", async (req, res) => {
  const product = await WishlistModel.find();
  res.send(product);
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

//Add new product
wishlistRouter.post("/createproduct", async (req, res) => {
  try {
    const payload = req.body;
    const { _id } = payload;

    const product = await WishlistModel.findById({ _id });

    if (product) {
      res.status(208).send({ msg: "Product Already In Wishlist" });
    } else {
      const new_product = new WishlistModel(payload);
      await new_product.save();
      res.status(200).send({ msg: "Added To Wishlist" });
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

//Delete product
wishlistRouter.delete("/delete/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    await WishlistModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "Product deleted successfully" });
  } catch (err) {
    res.send(401).send({ msg: "Something Went Wrong" });
  }
});

module.exports = { wishlistRouter };
