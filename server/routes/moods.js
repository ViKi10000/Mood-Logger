import express from "express";
import Mood from "../models/mood.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const moods = await Mood.find().sort({ createdAt: -1 });
  res.json(moods);
});

router.post("/", async (req, res) => {
  const mood = new Mood(req.body);
  await mood.save();
  res.json(mood);
});

export default router;
