import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

// create express app
const app = express();

// allows any client to send requests to this server (all origins)
app.use(cors())
// allows logging
app.use(morgan("dev"))
// allows express to parse json bodies
app.use(bodyParser.json())

app.post("/yo-hit-me!", (req, res) => {
  const { superDooperPooperScooper } = req.body;

  if(!superDooperPooperScooper) {
    // js error instances aren't directly stringifiable
    const err = new Error("we got a prob, bob")

    return res.status(400).send({ message: ":(" })
  }

  return res.status(200).json({
    success: ["howdy doody!"]
  })
})

app.listen(9000, "127.0.0.1", () => {
  console.log("Express running on 9000!")
})