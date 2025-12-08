
const moods = ["Happy", "Sad", "Angry", "Lazy", "Excited"];

export default function MoodSelector({activeMood, handleActiveMood}) {
  

  return (
    <div className="glass-card">
      <h2>Select Your Mood</h2>

      <div className="mood-box">
        {moods.map((mood) => (
          <button
            key={mood}
            className={`mood-btn ${activeMood === mood ? "active-mood" : ""}`}
            onClick={() => handleActiveMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>

      {/* TODO: Pass this active mood to parent using props or context (for advanced students)
          TODO: OR store in a global state later */}
    </div>
  );
}
