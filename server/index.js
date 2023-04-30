const express = require("express");
const port = 9000;

// exports form other files
const { connectDB } = require("./db");
const errorController = require("./app/errorController/index");
const logger = require("./app/config/logger");
// all Routes from other files
const contactRoutes = require("./app/routes/contact");
const reservationRoutes = require("./app/routes/reservation");
const vacanciesRoutes = require("./app/routes/vacancies");

require("dotenv").config();
// db connection

connectDB();

// importing Middel wares
const bodyParser = require("body-parser");
const cors = require("cors");

// main body
const app = express();

// middel wares

app.use(errorController);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// my routes
app.use("/", contactRoutes);
app.use("/", reservationRoutes);
app.use("/", vacanciesRoutes);

// checking server
app.listen(process.env.PORT || port, (err) => {
  if (err) throw err;
  logger.info(`> Ready on localhost:${port}`);
});
