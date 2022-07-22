const express = require('express')
const router = express.Router();

const {getAllRegionSite, getSeaRegionSite, postSeaRegionSite} = require('../controllers/region.controller')

router
    .route('/')
    .get(getAllRegionSite)

router
    .route('/southeast-asia')
    .get(getSeaRegionSite)
    .post(postSeaRegionSite)

module.exports = router;