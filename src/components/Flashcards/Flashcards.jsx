import Flashcard from "./Flashcard/Flashcard";

export default function Flashcards(props) {
  console.log(props);

  return (
    <>
      {props.flashcardDataProp.map((flashcard, index) => (
        <Flashcard
          key={index}
          emoji={flashcard.emoji}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </>
  );
}
