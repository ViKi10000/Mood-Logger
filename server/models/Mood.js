import mongoose from "mongoose";

const MoodSchema = new mongoose.Schema({
  emoji: String,
  note: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Mood", MoodSchema);
