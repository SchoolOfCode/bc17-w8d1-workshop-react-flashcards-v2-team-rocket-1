export default function Flashcards() {
    
  const flashcardData = [
    {
      emoji: "🤖",
      question:
        "What Pokémon is the most famous partner of Team Rocket's Jessie and James?",
      answer:
        "Meowth! Unlike most Pokémon, Meowth can talk and often helps Jessie and James in their schemes to capture rare Pokémon.",
    },
    {
      emoji: "🚀",
      question:
        "What is Team Rocket's signature catchphrase that they recite in nearly every encounter with Ash and his friends?",
      answer:
        "Prepare for trouble, and make it double! To protect the world from devastation, to unite all peoples within our nation...! This phrase is famously completed by Jessie, James, and Meowth.",
    },
    {
      emoji: "🤯",
      question:
        "Which Pokémon did James famously purchase thinking it was powerful, only to find out it was almost useless in battle?",
      answer:
        "Magikarp! James was tricked into buying a Magikarp, thinking it would evolve into a powerful Gyarados quickly. However, he soon realized Magikarp is virtually useless in battle until it evolves.",
    },
  ];

  return ( 
  {
    flashcardData.map((flashcard, index) => (
    <Flashcard
            key={index}
            emoji={flashcard.emoji}
            question={flashcard.question}
            answer={flashcard.question}
          />
  ))});
}