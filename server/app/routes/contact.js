const express = require("express");
const router = express.Router();
const { contact } = require("../controler/contact");

router.post("/contactUs-data", contact.contactDataPost);
module.exports = router;
