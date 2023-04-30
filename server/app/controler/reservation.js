const Reservation = require("../module/reservation");
const logger = require("../config/logger");
exports.reservation = {
  reservationDataPost: (req, res) => {
    try {
      const data = new Reservation(req.body);
      data.save((err, info) => {
        if (err) {
          logger.error(req.body, err);
          return res.status(400).json({
            error: "Not Able to save the data in DB",
          });
        } else {
          return res.status(200).json({
            success: "Data save in DB",
          });
        }
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
