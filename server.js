const express = require("express")
const dotenv = require("dotenv")

// load env variable
dotenv.config({path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 3008;

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`));
