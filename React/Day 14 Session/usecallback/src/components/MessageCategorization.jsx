import { useState, useMemo, useCallback } from "react";

const messages = [
  "This is a question?",
  "ANN: May your day become more merrier.",
  "Dedicate your heart!",
  "ANN: Take care comrade.",
  "Many things happens in life for no reason!",
  "What's your agenda?",
];

export default function MessageCategorization() {
  const [compactView, setCompactView] = useState(false);

  const { announcements, questions, general } = useMemo(() => {
    let announcements = [];
    let questions = [];
    let general = [];

    messages.forEach((m) => {
      if (m.match(/^ANN:/)) {
        announcements.push(m);
      } else if (m.match(/\?$/)) {
        questions.push(m);
      } else {
        general.push(m);
      }
    });

    console.log("Categorizing messages...");

    return { announcements, questions, general };
  }, []);

  return (
    <>
      <h1>Message Categorization</h1>
      <button
        onClick={() => {
          setCompactView((prev) => !prev);
        }}
      >
        {compactView ? "Expand" : "Compact"} View
      </button>
      <h3>Announcements</h3>
      <ul>
        {announcements.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
      <h3>Questions</h3>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
      {!compactView && (
        <>
          <h3>General</h3>
          <ul>
            {general.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
