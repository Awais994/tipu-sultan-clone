const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema;

const reservationSchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: true,
  },
  time: {
    type: String,
    trim: true,
    required: true,
  },
  party: {
    type: String,
    trim: true,
    required: true,
  },
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
});
module.exports = mongoose.model("Reservation", reservationSchema);
