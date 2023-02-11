const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("../config/database");
const { userRouter } = require("../Routers/User.route");

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome...");
});

app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server is listning on PORT${PORT}`);
});
