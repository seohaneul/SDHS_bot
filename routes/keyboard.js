var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const menu = {
    type: "buttons",
    buttons: ["학교 소개", "급식 정보"],
  };
  res
    .set({
      "content-type": "application/json",
    })
    .send(JSON.stringify(menu));
});

module.exports = router;
