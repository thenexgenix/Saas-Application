import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

//default middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use("/images", express.static("upload")); // for file upload

//your routes start from here

//export the express app
export default app;
