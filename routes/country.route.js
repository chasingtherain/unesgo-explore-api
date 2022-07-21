const express = require("express");
const { getCountrySite, getAllCountrySite, postCountrySite } = require("../controllers/country.controller");
const router = express.Router();

router.get("/", getAllCountrySite);

router.get("/name", getCountrySite);

router.post('/name', postCountrySite)

module.exports = router;
