const mongoose = require("mongoose");
require("dotenv").config();

const connaction = mongoose.connect(process.env.MONGO_URL);

module.exports = { connaction };
