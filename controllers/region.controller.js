const Region = require('../models/Region.model')

// desc     Get sea region's unesco site
// route    GET /api/v1/region/southeast-asia 
// access   public
exports.getSeaRegionSite = async (req, res, next) => {
  try {
    const seaUnescoData = await Region.find();
    if (!seaUnescoData) return res.status(400).json({success: false})
    console.log(seaUnescoData)
    res.status(200).json({success: true, data: seaUnescoData})
  } catch (error) {
    // res.status(400).json({ success: false, errorMsg: error})
    next(error)
  }
};

exports.getAllRegionSite = async (req, res, next) => {
    res.status(200).json({ message: "indicate the region in url; e.g. /api/v1/region/southeast-asia" });
};

// desc     update sea's unesco site
// route    POST /api/v1/region/southeast-asia
// access   public
exports.postSeaRegionSite = async (req, res, next) => {
  const seaUnescoSite = await Country.create(req.body)
  console.log("posting a country's unesco sites");
  res.status(201).json({ success: true, message: "posting a country's unesco sites", data: seaUnescoSite});
};
