const Country = require('../models/Country.model')
const {chinaUnescoSiteData} = require('../_data/chinaUnescoSiteData')

// desc     Get all country's unesco site
// route    GET /api/v1/country
// access   public
exports.getAllCountrySite = (req, res, next) => {
  res.status(200).json({ message: "indicate the country's name in url; e.g. /api/v1/country/china" });
};

// desc     Get a country's unesco site
// route    GET /api/v1/country/name
// access   public
exports.getCountrySite = async (req, res, next) => {
  try {
    const countryUnescoData = await Country.find();
    const testData = null
    if (!countryUnescoData) return res.status(400).json({success: false})
    
    res.status(200).json({success: true, data: countryUnescoData})
  } catch (error) {
    // res.status(400).json({ success: false, errorMsg: error})
    next(error)
  }
};

// desc     Get a China's unesco site
// route    GET /api/v1/country/china
// access   public
exports.getChinaSite = async (req, res, next) => {
  try {
    const countryUnescoData = await Country.find();

    if (!countryUnescoData) return res.status(400).json({success: false})

    res.status(200).json({success: true, data: countryUnescoData})


  } catch (error) {
    res.status(400).json({ success: false, errorMsg: error})
  }
};

// desc     update china's unesco site
// route    POST /api/v1/country/china
// access   public
exports.postChinaSite = async (req, res, next) => {
  const chinaUnescoSite = await Country.create(req.body)
  console.log("posting a country's unesco sites");
  console.log(req.body);
  res.status(201).json({ success: true, message: "posting a country's unesco sites", data: chinaUnescoSite});
};

// desc     update a country's unesco site
// route    POST /api/v1/country/name
// access   public
exports.postCountrySite = async (req, res, next) => {
  const countryUnescoSite = await Country.create(req.body)
  console.log("posting a country's unesco sites");
  console.log(req.body);
  res.status(201).json({ success: true, message: "posting a country's unesco sites", data: countryUnescoSite});
};
