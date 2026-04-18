import express from "express";

const Route = express.Router();

Route.get("/happy", async (req, res) => {
  try {
    let data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=UIuBtl4rz0E,KgayxOF4Y7E&key=${process.env.YOU_API_KEY}`,
    );
    let response = await data.json();
    return res.json(response);
  } catch (e) {
    return res.status(500).json({ error: "cannot fetch data" });
  }
});

export default Route;
