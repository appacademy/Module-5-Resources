import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())

app.post("/yo-hit-me!", (req, res) => {
  const { superDooperPooperScooper } = req.body;

  if(!superDooperPooperScooper) {
    // js error instances aren't directly stringifiable
    const err = new Error("we got a prob, bob")

    console.log(JSON.stringify({
      // error: err.name,
      // message: new Array(10).fill("you are awesome!"),
      // status: err.status,
      error: "howdy"
    }))

    return res.status(400).send({ message: ":(" })
  }

  return res.status(200).json({
    success: ["howdy doody!"]
  })
})

app.listen(9000, "127.0.0.1", () => {
  console.log("Express running on 9000!")
})