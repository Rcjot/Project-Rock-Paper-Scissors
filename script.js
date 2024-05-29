


function getComputerChoice(){
    let ranno =Math.floor(Math.random() * 3) + 1;
    if (ranno === 3){
        console.log("computer chose rock!");
        ranno = 'rock';
    }else if (ranno === 2){
        console.log("computer chose paper!");
        ranno = 'paper';
    }else if (ranno === 1){
        console.log("computer chose scissors!");
        ranno = 'scissors';
    }else{
        console.log(ranno);
        return 0;
    }
    console.log("ranoo:"  + ranno);
    return ranno;
}

function playRound(human, computer){
    if (human === computer){

        console.log("you chose "+ human +"\ncomputer chose "+computer+"\nyou both chose the same move");
        return 'draw';
    }else if (human === 'scissors' && computer === 'paper'){
        console.log("you chose "+ human +"\ncomputer chose "+computer+"\nScissors beats Paper, You Win!");
        return 'win';
    }else if (human === 'scissors' && computer === 'rock'){
        console.log("you chose "+ human +"\ncomputer chose "+computer+"\nRock beats Scissors, You Lose!");
        return 'lose';
    }else if (human === 'paper' && computer === 'rock'){
        console.log("you chose "+ human +"\ncomputer chose "+computer+"\nPaper beats Rock, You Win!");
        return 'win';
    }else if (human === 'paper' && computer === 'scissors'){
        console.log("you chose "+ human +"\ncomputer chose "+computer+"\nScissors beats Paper, You Lose!");
        return 'lose';
    }else if (human === 'rock' && computer === 'scissors'){
        console.log("you chose "+ human +"\ncomputer chose "+computer+"\nRock beats Scissors, You Win!");
        return 'win';
    }else if (human === 'rock' && computer === 'paper'){
        console.log("you chose "+ human +"\ncomputer chose "+computer+"\nPaper beats Rock, You Lose!");
        return 'lose';
    }else{
        consolo.log("Incorrect Input! Therefore you LOSE!");
        return 'lose';
    }
}

//results class reference
const results = document.querySelector(".results")
//current score div
const currentScore = document.createElement("div");
results.appendChild(currentScore);

let humanscore = 0;
let computerscore = 0;



function playGame(choice){
    console.log("playGame initiataedad");
  
    let WinOrLose = playRound(choice, getComputerChoice());
    if (WinOrLose === 'win'){
        humanscore++;
    }else if (WinOrLose === 'lose'){
        computerscore++;
    }
    
    currentScore.textContent = "You: " + humanscore + " computer: " + computerscore;
    

    if (humanscore === 5 || computerscore === 5){
        let Won = humanscore>computerscore ? 'won!' : humanscore<computerscore ? 'lost!' : 'tied!';
        let myText = "GAME OVER!   Final Score: You: "+humanscore + "  Computer: " + computerscore +"\nYou " + Won;  
        // put a button to play again!
        const resultsText = document.createElement("div");
        resultsText.textContent = myText;
        results.appendChild(resultsText);
        humanscore = 0;
        computerscore = 0;
    }
    

    // if (typeof choice === 'undefined'){
    //     console.log("please pick a move!");
    // }else{
        
    //     let WL = playRound(getHumanChoice(), getComputerChoice());




        
    // }
}

//button listen to events!
let choice = '';

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    console.log("roock");
    choice = 'rock';
    playGame(choice);
});
paper.addEventListener("click", () => {
    console.log("papperr");
    choice = 'paper';
    playGame(choice);
});
scissors.addEventListener("click", () => {
    console.log("scisosors");
    choice = 'scissors';
    playGame(choice);
});



// console.log("Hi!");
// playGame();



