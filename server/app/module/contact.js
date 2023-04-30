const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  phnNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("contact", contactSchema);
