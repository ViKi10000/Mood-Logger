import { useState } from "react";
import axios from "axios";

export default function MoodForm({ onAdd }) {
  const [emoji, setEmoji] = useState("😊");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/moods", {
      emoji,
      note,
    });
    onAdd(res.data);
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mood:
        <select value={emoji} onChange={(e) => setEmoji(e.target.value)}>
          <option>😊</option>
          <option>😢</option>
          <option>😠</option>
          <option>😴</option>
          <option>😇</option>
        </select>
      </label>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Why this mood?"
      />
      <button type="submit">Add Mood</button>
    </form>
  );
}
