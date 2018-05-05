const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thumbnailSchema = new Schema({
  photo: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Thumbnail = mongoose.model("Thumbnail", thumbnailSchema);

module.exports = Thumbnail;
