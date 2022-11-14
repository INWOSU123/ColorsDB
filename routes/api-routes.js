const db = require("../models");
module.exports = (app) => {
  app.get("/api/getColorByColorName/:colorName", (req, res) => {
    db.Color.findOne({
      where: {
        colorName: req.params.colorName,
      },
    }).then((dbColor) => {
      res.json(dbColor);
    });
  });
};
