
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
    
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("Draw.")
                return 0;
            } else if (computerChoice == "paper") {
                console.log("Lose. Paper beats Rock.")
                return -1;
            } else if (computerChoice == "scissors") {
                console.log("Win. Rock beats Scissors.")
                return 1;
            }
            break;
        case "paper":
            if (computerChoice == "paper") {
                console.log("Draw.")
                return 0;
            } else if (computerChoice == "scissors") {
                console.log("Lose. Scissors beats Paper.")
                return -1;
            } else if (computerChoice == "rock") {
                console.log("Win. Paper beats Rock.")
                return 1;
            }
            break;
        case "scissors":
            if (computerChoice == "scissors") {
                console.log("Draw.")
                return 0;
            } else if (computerChoice == "rock") {
                console.log("Lose. Rock beats Scissors.")
                return -1;
            } else if (computerChoice == "paper") {
                console.log("Win. Scissors beats Paper.")
                return 1;
            }
            break;
    }
}

function playGame() {
    const rounds = 6 // Its 5 but set to 6 to compansate for starting i from 1
    let currentround = 0
    let humanScore = 0
    let computerScore = 0

    for(i = 1; i < rounds; i++) {
        console.log("Starting Round " + i)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);

        if (winner == 1) {
            humanScore++
            currentround++
        }
        else if (winner == -1) {
            computerScore++
            currentround++
        }
        else {
            currentround++
        }

        if (currentround == 5) {
            console.log("FINAL! Human: " + humanScore + " Computer: " + computerScore)
        }
        else {
            console.log("Human: " + humanScore + " Computer: " + computerScore)
        }
    }
}

playGame()



