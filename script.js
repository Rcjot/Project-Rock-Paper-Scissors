console.log('Hi!');

function getHumanChoice(round){

    let choice = prompt('Round '+ round + ', Rock, Paper or Scissors?').toLowerCase();
    console.log("you chose " + choice);

    if (choice === "rock"){
        return 3;
    }else if (choice === "paper"){
        return 2;
    }else if (choice === "scissors"){
        return 1;
    }else{
        return 0;
    }
}


function getComputerChoice(){
    let ranno =Math.floor(Math.random() * 3) + 1;

    if (ranno === 3){
        console.log("computer chose rock!");
    }else if (ranno === 2){
        console.log("computer chose paper!");
    }else if (ranno === 1){
        console.log("computer chose scissors!");
    }else{
        return 0;
    }

    return ranno;
}

function playRound(human, computer){
    if (human === computer){
        alert("you both chose the same move");
        return 'draw';
    }else if (human === 1 && computer === 2){
        alert("Scissors beats Paper, You Win!");
        return 'win';
    }else if (human === 1 && computer === 3){
        return 'lose';
    }else if (human === 2 && computer === 3){
        alert("Paper beats Rock, You Win!");
        return 'win';
    }else if (human === 2 && computer === 1){
        alert("Scissors beats Paper, You Lose!");
        return 'lose';
    }else if (human === 3 && computer === 1){
        alert("Rock beats Scissors, You Win!");
        return 'win';
    }else if (human === 3 && computer === 2){
        alert("Paper beats Rock, You Lose!");
        return 'lose';
    }else{
        alert("Incorrect Input! Therefore you LOSE!");
        return 'lose';
    }
}



function playGame(){
    let game = true;
    while(game){
        let humanscore = 0;
        let computerscore = 0;
    
        alert("HI!?");
        for (let rounds = 1; rounds < 6; rounds++){
            let WL = playRound(getHumanChoice(rounds), getComputerChoice());
    
            if (WL === 'win'){
                humanscore++;
            }else if (WL === 'lose'){
                computerscore++;
            }
            console.log("human: " + humanscore + " computer: " + computerscore);
            alert("You: " + humanscore + " Computer: " + computerscore);
        }
        let play = prompt("Game ended! Want to play again? type 'yes' or 'no'").toLowerCase();
        if (play === 'yes'){
            game = true;
        }else {
            game = false;
        }

    }


}

playGame();



