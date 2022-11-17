const option = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    selection = option[Math.floor(Math.random() * option.length)];
    return selection;
}

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const selection = prompt('rock, paper, or scissors?');
        if (selection == null){
            continue;
        }
        const selectionLowered = selection.toLowerCase();
        if (option.includes(selectionLowered)){
            validatedInput = true;
            return selectionLowered;
        }
    }
}

function playRound(playerSelection, computerSelection){
    if(
        (playerSelection == computerSelection)
    ){
        return "It's a tie!";
    } else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else{
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore == computerScore){
        console.log(`It's a tie ${playerScore} : ${computerScore}`);
    } else if (playerScore > computerScore){
        console.log(`You win! ${playerScore} : ${computerScore}`);
    } else{
        console.log(`You lose! ${computerScore} : ${playerScore}`);
    }
}

game();