const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, required: true },
  mobile: { type: String, unique: true },
  email: String,
  city: String,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);
