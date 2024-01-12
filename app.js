const express = require("express");
const axios = require("axios");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
var today = new Date();

var year = today.getFullYear();
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var day = ("0" + today.getDate()).slice(-2);

var now = year + month + day;
console.log(now);

const apiRouter = express.Router();

app.use(logger("dev", {}));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", apiRouter);

const api = () =>
  fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=98a2543292c44d2cacb87a37122be55e&Type=json&plndex=1&pSize=1&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010572&MLSV_YMD=${now}`
  ).then((res) => res.json());

apiRouter.get("/today", async function (req, res) {
  const getData = await api();

  console.log(getData.mealServiceDietInfo[1].row[0].DDISH_NM);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
          },
        },
      ],
    },
  };

  return res.status(200).json({
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: getData.mealServiceDietInfo[1].row[0].DDISH_NM,
          },
        },
      ],
    },
  });
});

apiRouter.get("/tomorrow", function (req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            altText: "hello I'm Ryan",
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
});

app.listen(3000, function () {
  console.log("Example skill server listening on port 3000!");
});
