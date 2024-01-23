const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/keyboard", (req, res) => {
  const data = { type: "text" };
  res.json(data);
});

app.post("/message", (req, res) => {
  const question = req.body.userRequest.utterance;
  const goMain = "처음으로";

  if (question === "테스트") {
    const data = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "테스트",
            },
          },
        ],
        quickReplies: [
          {
            label: goMain,
            action: "message",
            messageText: goMain,
          },
        ],
      },
    };
  }
  res.json(data);
});

app.listen(process.env.POST, () => console.log(`node on ${process.env.POST}`));
