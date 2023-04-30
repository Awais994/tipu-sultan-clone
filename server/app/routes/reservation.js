const express = require("express");
const router = express.Router();
const { reservation } = require("../controler/reservation");

router.post("/reservation-data", reservation.reservationDataPost);
module.exports = router;
