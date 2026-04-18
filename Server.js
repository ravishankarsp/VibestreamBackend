import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Route from "./route/Route.js";

dotenv.config();
const PORT = process.env.PORT || 2408;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL.split(","),
  }),
);
app.use("/api", Route);
app.listen(PORT, () => {
  console.log("server is listening", PORT);
});
