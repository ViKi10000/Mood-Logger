import { useEffect, useState } from "react";
import axios from "axios";
import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";

function App() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/moods").then((res) => {
      setMoods(res.data);
    });
  }, []);

  const addMood = (newMood) => setMoods([newMood, ...moods]);

  return (
    <div>
      <h1>Mood Logger</h1>
      <MoodForm onAdd={addMood} />
      <MoodList moods={moods} />
    </div>
  );
}

export default App;
