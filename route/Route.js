import express from "express";

const Route = express.Router();

const HID = [
  "6LD30ChPsSs",
  "b68HETiNO98",
  "oLgzs8nut3A",
  "kw6SFbbinnY",
  "2qCpY38ompo",
  "A04WawrDblo",
  "tOM-nWPcR4U",
  "Vijx5tRBCeg",
  "QcQpqWhTBCE",
  "88iypMO9H7g",
  "OViH68fJUhM",
];

Route.get("/happy", async (req, res) => {
  try {
    let data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${shuffleArray(HID)}&key=${process.env.YOU_API_KEY}`,
    );
    let response = await data.json();
    return res.json(response);
  } catch (e) {
    return res.status(500).json({ error: "cannot fetch data" });
  }
});

export default Route;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
