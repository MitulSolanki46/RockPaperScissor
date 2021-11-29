const computerChoiceDisplay = document.getElementById("computer-Choice");
const userChoiceDisplay = document.getElementById("user-Choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
// let computerChoice;
possibleChoices.forEach((possibleChoices) =>
    possibleChoices.addEventListener("click", (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        output();
    })
);
let computerChoice;

function generateComputerChoice() {
    const randomNumber = Math.trunc(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerChoice = "rock";
    }
    if (randomNumber == 2) {
        computerChoice = "paper";
    }
    if (randomNumber == 3) {
        computerChoice = "scissor";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function output() {
    if (userChoice === computerChoice) {
        result.innerHTML = "Tie No Ones Win Play Again!";
    }
    if (
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        result.textContent = "Player is Win ! ";
    }
    if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "rock")
    ) {
        result.innerHTML = "Computer is Win !";
    }
}