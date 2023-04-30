const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema;

const vacanciesSchema = new Schema({
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
  role: {
    type: String,
    trim: true,
    required: true,
  },
});
module.exports = mongoose.model("Vacancies", vacanciesSchema);
