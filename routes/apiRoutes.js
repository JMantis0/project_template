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

router.put("/testCreate", (req, res) => {
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log("PUT request from client: /api/testCreate");
  const newTestData = models.TestData.build({ text: "TEST DATA" });
  newTestData
    .save()
    .then(response => {
      console.log("Saved a new entry to database");
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(
        "There was an error attempting to create a test DB entry: ",
        error
      );
      res.status(400).send(error);
    });
});

module.exports = router;