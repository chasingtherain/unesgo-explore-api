const express = require("express");
const { getChinaSite, getCountrySite, getAllCountrySite, postCountrySite } = require("../controllers/country.controller");
const router = express.Router();

router.get("/", getAllCountrySite);

router.get("/china", getChinaSite);

router.get("/name", getCountrySite);

router.post('/name', postCountrySite)

module.exports = router;
