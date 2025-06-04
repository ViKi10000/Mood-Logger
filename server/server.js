import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import moodRoutes from "./routes/moods.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/moods", moodRoutes);

// Connect DB and start server
connectDB().then(() => {
  const PORT = 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
