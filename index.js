const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const bodyParser = require("body-parser");
const db = require("./src/config/db");
const app = express();
const appRouter = require("./src/routes");
const errorMiddleware = require("./src/middleware/error.middleware");
const path = require("path");
//Configure our app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/src/public")));
//Establishing DB connection
db(process.env.DB_URI);
app.use(appRouter);
// ERROR MIDDLEWARE
errorMiddleware(app);
// Listen on provided port
const port = process.env.PORT || 3000;
app.listen(port);

process.on("uncaughtException", err => {
  console.error(err, "Unhandled Exception");
});

process.on("uncaughtRejection", err => {
  console.error(err, "Unhandled Rejection");
});
module.exports = app;
