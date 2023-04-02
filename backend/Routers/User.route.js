const express = require("express");
const { UserModel } = require("../Models/User.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  let users = await UserModel.find();
  res.send(users);
});

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const check_exist = await UserModel.find({ email });
  try {
    if (check_exist.length > 0) {
      res.status(404).send({ response: "user already registerd please login" });
    } else {
      //we required bcryt package for hasing password
      bcrypt.hash(password, 4, async function (err, hash) {
        // Store hash in your password DB.
        const userDetails = new UserModel({ name, email, password: hash });
        await userDetails.save();
        res.status(200).send({ response: "user registerd successfully" });
      });
    }
  } catch (error) {
    res.status(404).send("something went wrong please try again");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const check_exist = await UserModel.find({ email });

  if (check_exist.length > 0) {
    try {
      //compare user password with hased password
      const hased_password = check_exist[0].password;
      bcrypt.compare(password, hased_password, function (err, result) {
        // result == true if password matched
        if (result) {
          //genrate a token using jwt package and send back to user
          var token = jwt.sign({ userID: check_exist[0]._id }, "secret");
          res.send({ msg: "Login successfully", token: token });
        } else {
          res.status(404).send({ response: "Invalid Credential" });
        }
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).send("something went wrong please try after sometime");
    }
  } else {
    res.status(400).send({ response: "please signup first" });
  }
});

userRouter.get("/getProfile", async (req, res) => {
  let token = req.headers.token;
  try {
    var decoded = jwt.verify(token, "secret");
    let { userID } = decoded;
    let userDetails = await UserModel.findOne({ _id: userID });
    res.send({
      res: {
        name: userDetails.name,
        email: userDetails.email,
      },
    });
  } catch (err) {
    res.status(404).send({ res: "Something went wrong " });
    console.log(err);
  }
});

module.exports = { userRouter };
