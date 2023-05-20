import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { URL } = process.env;
const port = process.env.PORT || 5000;

const dbconnect = async (): Promise<void> => {
  if (!URL) {
    throw new Error("URL is not defined");
  }
  await mongoose.connect(URL).then(() => console.log("Database connected"));
};

dbconnect();

app.get("/", (req, res) => {
  res.send("Our server is running");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
