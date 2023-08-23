import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())

app.post("/yo-hit-me!", (req, res) => {
  const { superDooperPooperScooper } = req.body;

  if(!superDooperPooperScooper) {
    return res.status(400).json({
      error: new Error("yo you did a bad!"),
      message: new Array(10).fill("you are awesome!")
    })
  }
  console.log("!!!!!!!!!!!!!!!!!!")

  return res.status(200).json({
    success: ["howdy doody!"]
  })
})

app.listen(9000, "127.0.0.1", () => {
  console.log("Express running on 9000!")
})