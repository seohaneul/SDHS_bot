const express = require("express");
require("dotenv").config();
const app = express();
const logger = require("morgan");
const apiRouter = express.Router();
const School = require("school-kr");
const school = new School();

app.use(logger("dev", {}));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.post("/today", async (req, res) => {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan",
          },
        },
      ],
    },
  };
  //   const result = await school.search(School.Region.SEOUL, "서울디지텍고등학교");
  //   school.init(School.Type.HIGH, School.Region.SEOUL, result[0].schoolCode);

  //   const meal = await school.getMeal();
  //   const calendar = await school.getCalendar();

  //   // 오늘 날짜
  //   console.log(`${meal.month}월 ${meal.day}일`);

  //   // 오늘 급식 정보
  //   console.log(meal.today);
  //   const data = { menu: "맛있는거" };
  //   res.json(data);
});

apiRouter.post("/tomorrow", async (req, res) => {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl:
              "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan",
          },
        },
      ],
    },
  };
  //   const result = await school.search(School.Region.SEOUL, "서울디지텍고등학교");
  //   school.init(School.Type.HIGH, School.Region.SEOUL, result[0].schoolCode);

  //   const meal = await school.getMeal();
  //   const calendar = await school.getCalendar();

  //   // 오늘 날짜
  //   console.log(`${meal.month}월 ${meal.day}일`);

  //   // 오늘 급식 정보
  //   console.log(meal.today);
  //   const data = { menu: "맛있는거" };
  //   res.json(data);
});

app.listen(process.env.PORT || 3000, () =>
  console.log("node on " + process.env.PORT)
);
