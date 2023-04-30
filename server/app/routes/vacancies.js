const express = require("express");
const router = express.Router();
const { vacancies } = require("../controler/vacancies");

router.post("/vacancies-data", vacancies.vacanciesDataPost);
module.exports = router;
