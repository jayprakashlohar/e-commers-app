const express = require("express");
const { CartModel } = require("../Models/Cart.model");
const cartRouter = express.Router();

//Get all product
cartRouter.get("/", async (req, res) => {
  const product = await CartModel.find();
  res.send(product);
});

//Find by id
cartRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await CartModel.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//Add new product
cartRouter.post("/createproduct", async (req, res) => {
  try {
    const payload = req.body;
    const { _id } = payload;

    const product = await CartModel.findById({ _id });

    if (product) {
      res.status(201).send({ msg: "Product Already In Cart" });
    } else {
      const new_product = new CartModel(payload);
      await new_product.save();
      res.status(200).send({ msg: "Added To Cart" });
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

//Delete product
cartRouter.delete("/delete/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "Product deleted successfully" });
  } catch (err) {
    res.send(401).send({ msg: "Something Went Wrong" });
  }
});

cartRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await CartModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send({ msg: "Data updeted", data: data });
  } catch (error) {
    console.log("err", error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = { cartRouter };
