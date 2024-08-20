# Step 1

- Remove default Vite JS and CSS from app.jsx and app.css. ✅
- APPROACH: start with a single component to get something working in app.js. Then maybe split out a few bits to create a Header and Footer component.
- Adding to above, create a simple test component in.
- Eventually, we want end up with a component tree that looks like this:

App
├── Header
├── Form
├── Flashcards
│ └── Flashcard
└── Footer

- 🚨 TIP: A final piece of advice would be: The Header, Footer, Flashcards and Flashcard are the easier bits. Do them first 🙂.

- Create a very simple Header, footer, flashcard component ✅
- Move to seperate components ✅
- Test that all component display properly in the browser before continuing. ✅
- Create individual Flashcard components and hard code some "flashCards" data in the App component to begin with.
  - create const obj arr flashCardData with card data of question and answer ✅
  - .map flashCardData into Flashcard component with perams/props of flashCard and index ✅
  - pass as props the object dot notated as flashCard.question and flashCard.answer to get from flashCardData ✅
  - create flashcard component✅
  - return a question h?, and answer h? ✅
- pass props to create different repeatable flashcards ✅

# Step 2

- import useState ✅
- Add a state and state Function (function that changes the state) in the Flashcard file ✅
- Add an eventlistner in the div block ✅
- create an event handler that changes the state from 'open'  to 'close' ✅
- Within useEffect, add logic that hides the question and shows the answer when the state goes from close to open ✅

##

- Move flashcardData to app.jsx ✅
- Create state for that
- Move state via props down to Flashcards

# Step 3

- Once those components are done, then move on to create a Form component.

# Step 4

- Form state



<!-- 
We want a box that has the question on it
When clicked, show the answer
-->