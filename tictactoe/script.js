// GAME

// track clicks that happen on boxes

// check if valid move made: only works on empty cells

// updates and validates game state
    // check if player has won or game draws

// changes player (or stops game if won or draw)

// repeat

// stores the game status
const currentStatus = document.querySelector('.gamestatus');

// used to pause game if game won or draw
let gameActive = true;

// to know whose turn it is
let currentPlayer = "X";

// to track played cells and validate game state
let gameState = ["", "", "", "", "", "", "", "", ""];


// messages
const winText = () => 'Player ${currentPlayer} has won!';
const drawText = () => "It's a draw!";
const currentPlayerTurn = () => "It's ${currentPlayer}'s turn";


// initial message set for current player
currentStatus.innerHTML = currentPlayerTurn();

function cellPlayed() {

}


function playerSwap() {

}

function checkResult() {

}

function whichClickedBox(clickedBoxEvent) {
    

    // saves clicked element as variable
    const BoxClicked = clickedBoxEvent.target;

    // to identify which box in grid
    const BoxClickedIndex = parseInt(BoxClicked.getAttribute('data-cell-index'));

    // checks if cell already been played, or if game is paused
    if(gameState[BoxClickedIndex] !== "" || !gameActive) {
        return
    }
}

function restartGame() {

}

// event listener for when box is clicked
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', whichClickedBox));

// restart button
document.querySelector('.gamerestart').addEventListener('click', restartGame);