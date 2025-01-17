
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomChoice = getRandomInt(3)
    let choice

    //console.log(randomChoice)

    switch (randomChoice) {
        case 0:
            computerChoice = "Rock"
            break;
        case 1:
            computerChoice = "Paper"
            break;
        case 2:
            computerChoice = "Scissors"
            break;
    }

    //console.log(computerChoice)
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice? Rock, Paper or Scissors?")

    while (
    humanChoice.toLowerCase() !== "rock" &&
    humanChoice.toLowerCase() !== "paper" &&
    humanChoice.toLowerCase() !== "scissors" 
    ) {
        humanChoice = prompt("Try again. Please enter case-insensitive Rock, Paper, or Scissors:")
    }

    //console.log(humanChoice)
    return humanChoice;
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("Draw.")
            } else if (computerChoice == "paper") {
                console.log("Lose. Paper beats Rock.")
            } else (computerChoice == "scissors"); {
                console.log("Win. Rock beats Scissors.")
            }
            break;
        case "paper":
            if (computerChoice == "paper") {
                console.log("Draw.")
            } else if (computerChoice == "scissors") {
                console.log("Lose. Scissors beats Paper.")
            } else (computerChoice == "rock"); {
                console.log("Win. Paper beats Rock.")
            }
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);