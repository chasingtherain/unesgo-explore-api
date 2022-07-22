const fs = require('fs')
const mongoose = require('mongoose');
const colors = require('colors')
const dotenv = require('dotenv')

// load env var
dotenv.config({path: './config/config.env'})

// load models
const Country = require('./models/Country.model')
const Region = require('./models/Region.model')

// connect to db
mongoose.connect(process.env.MONGO_URI,{})

// read json files
const country = JSON.parse(fs.readFileSync(`${__dirname}/_data/chinaUnescoSiteData.json`,"utf-8"))
const region = JSON.parse(fs.readFileSync(`${__dirname}/_data/seaUnescoSiteData.json`,"utf-8"))

// import into db
const importData = async () => {
    try {
        await Country.create(country)
        await Region.create(region)
        console.log("data imported...".green.inverse);
        process.exit()
    } catch (error) {
        console.error(error);
    }
}

// delete data
const deleteData = async () => {
    try {
        await Country.deleteMany()
        await Region.deleteMany()
        console.log("data deleted...".red.inverse);
        process.exit()
    } catch (error) {
        console.error(error);
    }
}

if(process.argv[2] === "-i"){
    importData()
} else if(process.argv[2] === "-d"){
    deleteData()
}