const express = require("express");
const { CartModel } = require("../Models/Cart.model");
const cartRouter = express.Router();
const jwt = require("jsonwebtoken");

//Get all product
cartRouter.get("/", async (req, res) => {
  const token = req.headers?.token;
  const decoded = await jwt.verify(token, "secret");
  let userId = decoded.userID;

  const product = await CartModel.find();
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
cartRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await CartModel.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add Product
cartRouter.post("/createproduct", async (req, res) => {
  const token = req.headers?.token;
  const decoded = await jwt.verify(token, "secret");
  let userId = decoded.userID;
  try {
    const payload = req.body;
    const { _id } = payload;

    const product = await CartModel.findOne({ _id });
    // console.log(product);

    if (product) {
      let { userIds } = product;
      let isExit = userIds.find((id) => userId == id);
      // console.log("isExit", isExit);
      if (isExit) {
        res.status(201).send({ msg: "Product Already In Cart" });
      } else {
        product.userIds.push(userId);
        // console.log("pro",product)
        const new_product = new CartModel(product);
        await new_product.save();
        res.status(200).send({ msg: "Added To Cart" });
      }
    } else {
      let userIds = [];
      userIds.push(userId);
      payload.userIds = userIds;
      const new_product = new CartModel(payload);
      await new_product.save();
      res.status(200).send({ msg: "Added To Cart" });
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

// Delete Product
cartRouter.delete("/delete/:id", async (req, res) => {
  const token = req.headers?.token;
  const decoded = await jwt.verify(token, "secret");
  let userId = decoded.userID;
  try {
    const product = await CartModel.findById({ _id: req.params.id });
    if (product) {
      let { userIds } = product;
      let isExit = userIds.find((id) => userId == id);
      // console.log("isExit", isExit);
      if (isExit) {
        const index = userIds.indexOf(userId);
        userIds.splice(index, 1);
        product.userIds = userIds;
        const new_product = new CartModel(product);
        await new_product.save();
        res.status(200).send({ msg: "Removed From Cart" });
      } else {
        res.status(201).send({ msg: "Product not in Cart" });
      }
    } else {
      res.status(201).send({ msg: "Product not in Cart" });
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

// Update Product
cartRouter.patch("/update/:id", async (req, res) => {
  const token = req.headers?.token;
  const decoded = await jwt.verify(token, "secret");
  let userId = decoded.userID;
  const id = req.params.id;
  try {
    const payload = req.body;
    const data = await CartModel.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
    if (data) {
      let { userIds } = data;
      let isExit = userIds.find((id) => userId == id);
      // console.log("isExit", isExit);
      if (isExit) {
        const new_product = new CartModel(data);
        await new_product.save();
        res.status(200).send({ msg: "Updated In Cart" });
      } else {
        data.userIds.push(userId);
        const new_product = new CartModel(data);
        await new_product.save();
        res.status(200).send({ msg: "Updated In Cart" });
      }
    } else {
      res.status(404).send({ msg: "Product not Found" });
    }
  } catch (err) {
    res.status(404).send({ msg: "Something went wrong" });
  }
});

module.exports = { cartRouter };

