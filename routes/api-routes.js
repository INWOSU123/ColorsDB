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

  //get color id
  app.get("/api/getColorById/:colorId", (req, res) => {
    db.Color.findOne({
      where: {
        colorId: req.params.colorId,
      },
    }).then((dbColor) => {
      res.json(dbColor);
    });
  });

  // Creates a new Color in the database
  app.post("/api/color", (req, res) => {
    db.Color.create(
    {
      colorName: req.body.colorName,
      hex: req.body.hex,
      category: req.body.category,
      colorType: req.body.colorType,
    }
    ).then((dbColor) => {
      res.json(dbColor);
    });
  });

  //Deletes a Color from the database with the specified Id
  app.delete("/api/color/:colorId", (req,res)=>{
    db.Color.destroy({
        where: {
            colorId: req.params.colorId
        }
    }).then((dbColor)=>{
        res.json(dbColor);
    });
  });
  
  //Updates a color record in the database
  app.patch("/api/color/:colorId", (req,res)=>{
    db.Color.update({
        colorName: req.body.colorName,
        colorType: req.body.colorType,
        category: req.body.category,
        hex: req.body.hex
    }, {
        where: {
            colorId: req.params.colorId
        }
    }).then((dbColor)=>{
        res.json(dbColor);
    }).catch((error)=>{
        res.json(error);
    });
  });
};
