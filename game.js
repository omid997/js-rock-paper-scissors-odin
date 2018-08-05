var gameTies = playerWins = computerWins = 0;


var buttons = document.querySelectorAll("a.button");
var playerResultBox = document.getElementById("playerWins");
var computerResultBox = document.getElementById("computerWins");
var gameTiesBox = document.getElementById("gameTies");

buttons.forEach(function(element) {
    element.addEventListener("click" , function(){
        var computerChoice = computerChoiceRandom();
        var playerChoice = element.id;
        play(playerChoice,computerChoice);
        if (checkScores())
            reset();
    })
});


function computerChoiceRandom() {
    var options = ["rock" , "paper" , "scissors"]; 
    var randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function play(player , computer) {
    console.log(player,computer);
    if ( player === computer) {
        gameTiesBox.innerHTML = ++gameTies;
        return
    } else if (player === "rock" && computer === "paper") {
        computerResultBox.innerHTML = ++computerWins;
        return
    } else if (player === "rock" && computer === "scissors") {
        playerResultBox.innerHTML = ++playerWins;
        return;
    } else if (player === "paper" && computer === "scissors") {
        computerResultBox.innerHTML = ++computerWins;
        return;
    } else if (player === "paper" && computer === "rock") {
        playerResultBox.innerHTML = ++playerWins;
        return;
    } else if (player === "scissors" && computer === "rock") {
        computerResultBox.innerHTML = ++computerWins;
        return;
    } else if (player === "scissors" && computer === "paper") {
        playerResultBox.innerHTML = ++playerWins;
       return;
    }
}
function checkScores() {
    if(playerWins >= 5) {
        alert("player won");
        return true;
    } else if (computerWins >= 5 ) {
        alert("computer won");
        return true;
    }
    return false;
}
function reset() {
    computerResultBox.innerHTML = 0;
    playerResultBox.innerHTML = 0;
    gameTiesBox.innerHTML = 0;
    computerWins = 0;
    playerWins = 0;
    gameTies = 0;
}