const Country = require('../models/Country')

// desc     Get a country's unesco site
// route    GET /api/v1/country
// access   public
exports.getAllCountrySite = (req, res, next) => {
  console.log("getting all country's unesco sites");
  res.status(200).json({ message: "getting all country's unesco sites" });
};

exports.getCountrySite = (req, res, next) => {
  console.log("getting a country's unesco sites");
  console.log(req.body);
  res.status(200).json({ message: "getting a country's unesco sites" });
};

exports.postCountrySite = (req, res, next) => {
  console.log("posting a country's unesco sites");
  console.log(req.body);
  res.status(200).json({ message: "posting a country's unesco sites" });
};
