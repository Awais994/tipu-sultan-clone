require("dotenv").config();
const logger = require("./app/config/logger");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
exports.connectDB = () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      logger.info("DB CONNECTED");
    })
    .catch((err) => {
      logger.error("DB NOT CONNECTED");
    });
};
