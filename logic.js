
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomChoice = getRandomInt(3)
    let choice

    //console.log(randomChoice)

    switch (randomChoice) {
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
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
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    const status = document.querySelector("#status");
    roundResult.style.display = "flex";

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                status.textContent = "Draw";
                return 0;
            } else if (computerChoice == "paper") {
                status.textContent = "Lose. Paper beats Rock.";
                return -1;
            } else if (computerChoice == "scissors") {
                status.textContent = "Win. Rock beats Scissors.";
                return 1;
            }
            break;
        case "paper":
            if (computerChoice == "paper") {
                status.textContent = "Draw";
                return 0;
            } else if (computerChoice == "scissors") {
                status.textContent = "Lose. Scissors beats Paper.";
                return -1;
            } else if (computerChoice == "rock") {
                status.textContent = "Win. Paper beats Rock.";
                return 1;
            }
            break;
        case "scissors":
            if (computerChoice == "scissors") {
                status.textContent = "Draw";
                return 0;
            } else if (computerChoice == "rock") {
                status.textContent = "Lose. Rock beats Scissors.";
                return -1;
            } else if (computerChoice == "paper") {
                status.textContent = "Win. Scissors beats Paper.";
                return 1;
            }
            break;
    }
}

const roundResult= document.querySelector("#roundResult");
const choice = document.querySelector("#choice");
const status = document.querySelector("#status");
let currentround = 0;
let humanScore = 0;
let computerScore = 0;

function playNextRound( playerChoice ) {
    const rounds = 6; // Its 5 but set to 6 to compansate for starting i from 1
    const scoresElement = document.querySelector("#scores");
    const roundsElement = document.querySelector("#rounds");
    const humanSelection = playerChoice;
    const computerSelection = getComputerChoice();

    let winner = playRound(humanSelection, computerSelection);

    if (winner == 1) {
        humanScore++;
        currentround++;
        scoresElement.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        roundsElement.textContent = `Round: ${currentround}`;
    }
    else if (winner == -1) {
        computerScore++;
        currentround++;
        scoresElement.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
        roundsElement.textContent = `Round: ${currentround}`;
    }
    else {
        currentround++;
        roundsElement.textContent = `Round: ${currentround}`;
    }

    if (currentround == 5) {
        const gameWindow = document.querySelector("#gameWindow");
        const newDiv = document.createElement("div");
        if (humanScore > computerScore) {
            newDiv.textContent = "Winner Winner Chicken Dinner!";
        }
        else {
            newDiv.textContent = "Loser!!!";
            
        }
        newDiv.style.cssText = "color: red; font-weight: bold; padding: 30px; text-align: center;";
        gameWindow.parentNode.replaceChild(newDiv, gameWindow);
    }
}

const nextRound = document.querySelector("#nextRound");
nextRound.addEventListener("click", () => {
    choice.style.display = "flex";
    roundResult.style.display = "none";
})

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    choice.style.display = "none";
    playNextRound("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    choice.style.display = "none";
    playNextRound("paper");
});

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
    choice.style.display = "none";
    playNextRound("scissors");
});