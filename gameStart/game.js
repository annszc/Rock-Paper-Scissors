const gameSummary = 
{
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    yourScore: 0,
    opponentScore: 0,
}

const game = 
{
    player1Hand: "",
    player2Hand: "",
}

const hands = [...document.querySelectorAll('img.one')];


function handSelection() 
{
    game.player1Hand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px black'
    game.player2Hand = hands[Math.floor(Math.random()*3)].
    dataset.option;
    const gameResult = checkResult(game.player1Hand, game.player2Hand)
    publishResult(game.player1Hand, game.player2Hand, gameResult);
}


hands.forEach(hand => hand.addEventListener("click", handSelection));

const player1 = game.player1Hand;
const player2 = game.player2Hand;

function checkResult(player1, player2) 
{
    if(player1 === player2) {
        return "Draw"
    } else if((player1 === "paper" && player2 === "rock") ||
    (player1 === "rock" && player2 === "scissors") || 
    (player1 === "scissors" && player2 === "paper")) {
        return "You win!" 
    } else { return "You lose!"};
}

function publishResult (player1, player2, result) {
    document.querySelector('[data-summary="your-choice"]')
    .textContent = player1;

    document.querySelector('[data-summary="ai-choice"]')
    .textContent = player2;

    if (result === "You win!") {
    document.querySelector('[data-summary="your-score"]').textContent = ++gameSummary.yourScore}
    
     else if (result === "You lose!") {
    document.querySelector('[data-summary="ai-score"]').textContent = ++gameSummary.losses}

    changeTheHeader(result);
}


function changeTheHeader(result) 
{
document.querySelector('.blink').innerHTML = result;
}


for (let i; i<8; i++) 
{
    console.log("bla");
}




