const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan')
const connectDB = require('./config/db')

// load env variable
dotenv.config({ path: "./config/config.env" });

// connect to db
connectDB()

// Route files
const country = require("./routes/country.route");

const app = express();

const controller = (req, res) => {
  console.log("hi there");
  res.json({ message: "Hello there!" });
};

const logger = (req,res,next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}`)
  next()
}

// body parser
app.use(express.json())

// dev logging middleware
if(process.env.NODE_ENV === "development") app.use(morgan('dev'))

// mount routers
app.use("/api/v1/country", country);

app.get("/api/v1/region", controller);

const PORT = process.env.PORT || 3008;

app.listen(
  PORT,
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
