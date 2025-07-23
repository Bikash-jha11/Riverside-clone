import express from "express";
const app = express();
require("dotenv").config();
import { ConnectToDb } from "./util/dbConnection";
const cors = require("cors");
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",

  credentials: true

}));



app.use(require("./routes/authRoute"));
app.use(require('./routes/meetingRoute'))

const dbConnection = new ConnectToDb(process.env.DATABASE_URL as string);
dbConnection.connect();

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log("server started");
});
