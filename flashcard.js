const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" }
];

let currentCard = 0;

const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const flashcard = document.getElementById("flashcard");

function updateFlashcard() {
    const card = flashcards[currentCard];
    questionText.textContent = card.question;
    answerText.textContent = card.answer;
}

// Flip the flashcard when clicked
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentCard = (currentCard + 1) % flashcards.length;
    updateFlashcard();
    flashcard.classList.remove("flipped");  // Reset flip when moving to next card
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateFlashcard();
    flashcard.classList.remove("flipped");  // Reset flip when moving to previous card
});

// Initialize the flashcard
updateFlashcard();