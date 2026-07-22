console.log('Hello World!')

let humanScore = 0;
let computerScore = 0;

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

   
    function getComputerChoice() {

        let compChoice = '';
        let randomInt = getRandomInt(0, 3);

        if (randomInt === 0) {
            compChoice = 'rock';
        } else if (randomInt === 1) {
            compChoice = 'paper';
        } else {
            compChoice = 'scissors'
        }
        return compChoice;
    }

    function getHumanChoice() {
        let humChoice = prompt('Rock, paper, or scissors?').toLowerCase();
        return humChoice;

    }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('You lose!');
            computerScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win!');
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('You lose!');
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win!');
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win!');
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('You lose!');
            computerScore++
        } else {
            console.log('its a tie!')
        }
    }

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);
console.log(computerSelection);






