import { useState } from "react";

export default function Flashcard({ key, emoji, question, answer }) {
  const [visibility, changeVisibility] = useState(false);

  return (
    <div onClick={() => changeVisibility(true)}>
      <h2>{emoji}</h2>
      {visibility ? <h3>{answer}</h3> : <h3>{question}</h3>}
    </div>
  );
}
