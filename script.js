let choice = '';
let humanscore = 0;
let computerscore = 0;
let round = 0;

//results
const results = document.querySelector(".results") 
const results2 = document.querySelector(".results2");
// const moves = document.querySelector(".midSection");
const yourScore = document.querySelector(".yourScore");
const theirScore = document.querySelector(".theirScore");
const displayRound = document.querySelector(".displayRound");

const yourBubble = document.getElementById("yourBubble");
const theirBubble = document.getElementById("theirBubble");
// const currentScore = document.createElement("div");
// const winText = document.createElement("div");
const moves  = document.createElement("div");
const resultsText = document.createElement("div");
const happyImg = document.createElement("img");
const sadImg = document.createElement("img");
const drawImg = document.createElement("img");
const rockbubble = document.createElement("img");
const paperbubble = document.createElement("img");
const scissorsbubble = document.createElement("img");
happyImg.src = "pictures/happyrock.png";
sadImg.src = "pictures/sadrock.png";
drawImg.src = "pictures/drawrock.png";
rockbubble.src = "pictures/Rockbubble.png";
paperbubble.src = "pictures/Paperbubble.png";
scissorsbubble.src = "pictures/Scissorsbubble.png";
happyImg.classList.add("happyImg");
sadImg.classList.add("sadImg");
drawImg.classList.add("drawImg");
rockbubble.classList.add("bubble");
paperbubble.classList.add("bubble");
scissorsbubble.classList.add("bubble");


displayRound.textContent = "VS";
// winText.classList.add("winText");
// resultsText.classList.add("resultsText");
results2.appendChild(moves);
// results.appendChild(currentScore);
// results.appendChild(winText);
// results.appendChild(resultsText);
//buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");





function getComputerChoice(){
    let ranno =Math.floor(Math.random() * 3) + 1;
    if (ranno === 3){
        theirBubble.src = rockbubble.src;
        console.log("computer chose rock!");
        ranno = 'rock';
    }else if (ranno === 2){
        theirBubble.src = paperbubble.src;
        console.log("computer chose paper!");
        ranno = 'paper';
    }else if (ranno === 1){
        theirBubble.src = scissorsbubble.src;
        console.log("computer chose scissors!");
        ranno = 'scissors';
    }else{
        console.log(ranno);
        return 0;
    }
    // console.log("ranoo:"  + ranno);
    return ranno;
}

function playRound(human, computer){
    console.log("PlayRound() called!");
    if (human === computer){
        moves.textContent = "You both chose the same move";
        return 'draw';
    }else if (human === 'scissors' && computer === 'paper'){
        moves.textContent ="Scissors beats Paper, You Win!";
        return 'win';
    }else if (human === 'scissors' && computer === 'rock'){
        moves.textContent ="Rock beats Scissors, You Lose!";
        return 'lose';
    }else if (human === 'paper' && computer === 'rock'){
        moves.textContent = "Paper beats Rock, You Win!";
        return 'win';
    }else if (human === 'paper' && computer === 'scissors'){
        moves.textContent = "Scissors beats Paper, You Lose!";
        return 'lose';
    }else if (human === 'rock' && computer === 'scissors'){
        moves.textContent = "Rock beats Scissors, You Win!";
        return 'win';
    }else if (human === 'rock' && computer === 'paper'){
        moves.textContent = "Paper beats Rock, You Lose!";
        return 'lose';
    }else{
        moves.textContent = "Incorrect Input! Therefore you LOSE!";
        return 'lose';
    }
}


function playGame(choice){
    resultsText.textContent = '';

    console.log("playGame initiated!");
  
    let WinOrLose = playRound(choice, getComputerChoice());
    if (WinOrLose === 'win'){
        humanscore++;
        console.log("win");
    }else if (WinOrLose === 'lose'){
        computerscore++;
        console.log("lost");
    }else{
        console.log("draw");
    }
    displayRound.textContent = "Round " + round;
    yourScore.textContent = "You: " + humanscore;
    theirScore.textContent = "Opponent: " + computerscore;
    //currentScore.textContent = "You: " + humanscore + " computer: " + computerscore;
    

    if (humanscore === 5 || computerscore === 5){
        let Won = humanscore>computerscore ? 'won!' : humanscore<computerscore ? 'lost!' : 'tied!';

        
        // put a button to play again!
        rock.setAttribute("disabled", "disabled");
        paper.setAttribute("disabled", "disabled");
        scissors.setAttribute("disabled", "disabled");
        // winText.textContent = "You " + Won;  
        moves.textContent = "You " + Won;
        humanscore = 0;
        computerscore = 0;

        const resultsPlay = document.createElement("button");
        resultsPlay.textContent = "Play Again";
        resultsPlay.classList.add("playButton");
        results2.appendChild(resultsPlay);
        if (Won === 'won!'){
            results2.appendChild(happyImg);
        }else if (Won === 'lost!'){
            results2.appendChild(sadImg);
        }else{
            results2.appendChild(drawImg);
        }
        
        resultsPlay.addEventListener("click", () => {
            rock.removeAttribute("disabled");
            paper.removeAttribute("disabled");
            scissors.removeAttribute("disabled");
            moves.textContent = '';
            resultsPlay.remove();
            happyImg.remove();
            sadImg.remove();
            drawImg.remove();
        })
        round = 0;
    }
    round++;
}






rock.addEventListener("click", () => {
    yourBubble.src = rockbubble.src;
    console.log("roock");
    choice = 'rock';
    playGame(choice);
});
paper.addEventListener("click", () => {
    yourBubble.src = paperbubble.src;
    console.log("papperr");
    choice = 'paper';
    playGame(choice);
});
scissors.addEventListener("click", () => {
    yourBubble.src = scissorsbubble.src;
    console.log("scisosors");
    choice = 'scissors';
    playGame(choice);
});



// console.log("Hi!");
// playGame();



