export default function MoodList({ moods }) {
  return (
    <ul>
      {moods.map((mood) => (
        <li key={mood._id}>
          <strong>{mood.emoji}</strong> — {mood.note} <br />
          <small>{new Date(mood.createdAt).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
}
