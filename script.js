function getComputerChoice(){
    selection = Math.floor(Math.random() * 3);
    if (selection == 0){
        return "Rock"
    } else if (selection == 1){
        return "Paper"
    } else{
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if(
        (playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ){
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if(
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")
    ){
        return "You lose! " + computerSelection + " beats " + playerSelection
    } else{
        return "Draw"
    }
}

const playerSelection = prompt("rps?");
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));
