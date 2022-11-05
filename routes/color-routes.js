module.exports = function (app) {
  app.get("/", (req, res) => {
    return res.render("colors");
  });
};
