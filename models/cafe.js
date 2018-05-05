const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cafeSchema = new Schema({
  photo: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Cafe = mongoose.model("Cafe", cafeSchema);

module.exports = Cafe;
