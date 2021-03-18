const router = require("express").Router();

const env = require("dotenv");

const axios = require("axios");
const models = require("../models");
const Sequelize = require("sequelize");

//  npm moment
const moment = require("moment");
moment().format();

//  npm xlsx
const XLSX = require("xlsx");
const sampleBook = XLSX.readFile("./Excel_Sample.xlsx");
const sheet_name_list = sampleBook.SheetNames;
const sampleBookObject = XLSX.utils.sheet_to_json(
  sampleBook.Sheets[sheet_name_list[0]]
);

router.get("/test", (req, res) => {
  console.log(
    `███████████████████████████████████████████████████████████████████`
  );
  console.log(
    `███████████████████████████████████████████████████████████████████`
  );
  console.log(`GET request from client: /api/test`);
  console.log("Sending OK status to client.");
  res.send(200);
});

module.exports = router;