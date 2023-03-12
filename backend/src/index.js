const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./Routes/User.route");
const { mobileRouter } = require("./Routes/MobileProducts.route");
const { wishlistRouter } = require("./Routes/Wishlist.route");
const { cartRouter } = require("./Routes/Cart.route");
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome..." });
});

app.use("/user", userRouter);
app.use("/iphone", mobileRouter);
app.use("/wishlist", wishlistRouter);
app.use("/cart", cartRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server is listning on PORT${PORT}`);
});
