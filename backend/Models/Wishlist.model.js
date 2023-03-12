const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  brand: String,
  rate: String,
  price: Number,
  qty: Number,
});

const WishlistModel = mongoose.model("wishlist", WishlistSchema);

module.exports = { WishlistModel };
