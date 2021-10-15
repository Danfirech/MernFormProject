import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import studentRoutes from "./routes/student.js";

app.use("/students", studentRoutes);

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://DanielPossehl:pass1@cluster0.4newk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewURLparser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app
      .listen(PORT, () =>
        console.log(`connection is established and running on port: ${PORT}`)
      )
      .catch((err) => console.log(err.message))
  );
