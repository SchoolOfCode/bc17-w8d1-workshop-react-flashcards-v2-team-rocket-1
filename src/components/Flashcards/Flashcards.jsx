import Flashcard from "./Flashcard/Flashcard";

export default function Flashcards() {
    
  return ( 
    <>
    {flashcardData.map((flashcard, index) => (
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