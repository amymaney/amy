// GAME

// track clicks that happen on boxes

// check if valid move made: only works on empty cells

// updates and validates game state
    // check if player has won or game draws

// changes player (or stops game if won or draw)

// repeat

// stores the game status
const currentStatus = document.querySelector(".gamestatus");

// used to pause game if game won or draw
let gameActive = true;

// to know whose turn it is
let currentPlayer = "X";

// to track played cells and validate game state
let gameState = ["", "", "", "", "", "", "", "", ""];


// messages
const winText = () => `Player ${currentPlayer} has won!`;
const drawText = () => "It's a draw!";
const currentPlayerTurn = () => `Its ${currentPlayer}'s turn`;


// initial message set for current player
currentStatus.innerHTML = currentPlayerTurn();

    // winning conditions
    //   x x x   x . .   x . .   . x .   . . x   . . .   . . .   . . x
    //   . . .   x . .   . x .   . x .   . . x   x x x   . . .   . x .
    //   . . .   x . .   . . x   . x .   . . x   . . .   x x x   x . .

    const winningConditions = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6]
    ];

function cellPlayed(BoxClicked, BoxClickedIndex) {
    // update game state etc
    gameState[BoxClickedIndex] = currentPlayer;
    BoxClicked.innerHTML = currentPlayer;
}


function playerSwap() {
    if(currentPlayer === "X")
    {
        currentPlayer = "O";
    }
    else if(currentPlayer === "O")
    {
        currentPlayer = "X";
    }

    currentStatus.innerHTML = currentPlayerTurn();
}


function checkResult() {
    // check whether win, draw, or game still continue

    let winningRound = false;
    for(let i=0; i < 8; i++)
    {
        // the indexes for cells that need to be filled by same player
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if(a === "" || b === "" || c === "")
        {
            continue;
        }
        // if same player (all matches), current player wins
        if(a === b && b === c)
        {
            winningRound = true;
            break
        }
    }

    if(winningRound) 
    {
        currentStatus.innerHTML = winText();
        gameActive = false;
        return;
    }

    // check if draw
    // draw when all fields filled
    // check if anywhere in game state array still has empty box
    let drawRound = !gameState.includes("");
    if(drawRound) {
        currentStatus.innerHTML = drawText();
        gameActive = false;
        return;
    }

    playerSwap();

}

function whichClickedBox(clickedBoxEvent) {
    

    // saves clicked element as variable
    const BoxClicked = clickedBoxEvent.target;

    // to identify which box in grid
    const BoxClickedIndex = parseInt(BoxClicked.getAttribute('data-cell-index'));

    // checks if cell already been played, or if game is paused
    // then ignore click
    if(gameState[BoxClickedIndex] !== "" || !gameActive) {
        return
    }

    // otherwise, we continue
    cellPlayed(BoxClicked, BoxClickedIndex);
    checkResult();
}

function restartGame() {
    // clear board and set tracking variables to default
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];

    currentStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
}

// event listener for when box is clicked
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', whichClickedBox));

// restart button
document.querySelector('.gamerestart').addEventListener('click', restartGame);