const Vacancies = require("../module/vacancies");
const logger = require("../config/logger");
exports.vacancies = {
  vacanciesDataPost: (req, res) => {
    try {
      const data = new Vacancies(req.body);
      data.save((err, info) => {
        if (err) {
          logger.error(req.body, err);
          return res.status(400).json({
            error: "Not Able to save the data in DB",
          });
        } else {
          return res.status(200).json({
            success: "data save in DB",
          });
        }
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
