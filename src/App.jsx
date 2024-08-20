import { Children } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Flashcards from "./components/Flashcards/Flashcards";

function App() {
  const [flashcardData, setFlashcardData] = useState([
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
  ]);

  return (
    <>
      <Header />
      <Flashcards flashcardDataProp={flashcardData} />
      <Footer />
    </>
  );
}

export default App;
