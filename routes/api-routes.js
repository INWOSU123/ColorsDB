const db = require("../models");
module.exports = (app) => {
  //Gets All Color Data in the Color Table
  app.get("/api/colors", (req, res) => {
    db.Color.findAll({}).then((dbColors) => {
      res.json(dbColors);
    });
  });

  // Gets Color Info using the specified Color Name
  app.get("/api/getColorByColorName/:colorName", (req, res) => {
    db.Color.findOne({
      where: {
        colorName: req.params.colorName,
      },
    }).then((dbColor) => {
      res.json(dbColor);
    });
  });

  // Creates a new Color in the database
  app.post("/api/color", (req, res) => {
    db.Color.create({
      colorName: req.body.colorName,
      hex: req.body.hex,
      category: req.body.category,
      colorType: req.body.colorType,
    }).then((dbColor) => {
      res.json(dbColor);
    });
  });
};
