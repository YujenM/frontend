// Get all the board elements
const boards = document.querySelectorAll('.board');

// Variable to track the current player
let currentPlayer = 'X';

// Function to handle the click event on each board
function handleBoardClick(event) {
// Check if the board is already marked
if (!event.target.textContent) {
// Set the current player's symbol on the board
event.target.textContent = currentPlayer;

// Toggle the current player
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

// Update the player turn text
const playerTurn = document.querySelector('.player_turn');
playerTurn.textContent = currentPlayer + ' turn';

// Check for a win
if (checkWin()) {
    // Display the winning message
    playerTurn.textContent = currentPlayer + ' wins!';
    disableBoardClicks();
} else if (checkDraw()) {
    // Display the draw message
    playerTurn.textContent = 'It\'s a draw!';
    disableBoardClicks();
}
}
}

// Function to check for a win
function checkWin() {
const winningCombinations = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
[0, 4, 8], [2, 4, 6] // Diagonals
];

for (const combination of winningCombinations) {
const [a, b, c] = combination;
if (
    boards[a].textContent === currentPlayer &&
    boards[b].textContent === currentPlayer &&
    boards[c].textContent === currentPlayer
) {
    return true; // Current player wins
}
}

return false; // No win
}

// Function to check for a draw
function checkDraw() {
for (const board of boards) {
if (!board.textContent) {
    return false; // There are still empty boards
}
}

return true; // All boards are filled
}

// Function to disable click events on boards
function disableBoardClicks() {
for (const board of boards) {
board.removeEventListener('click', handleBoardClick);
}
}

// Reset button click event handler
const resetButton = document.querySelector('.button button');
resetButton.addEventListener('click', function() {
// Clear the board
for (const board of boards) {
board.textContent = '';
}

// Reset the current player and player turn text
currentPlayer = 'X';
const playerTurn = document.querySelector('.player_turn');
playerTurn.textContent = currentPlayer + ' turn';

// Re-enable click events on boards
for (const board of boards) {
board.addEventListener('click', handleBoardClick);
}
});

// Add click event listeners to each board
for (const board of boards) {
board.addEventListener('click', handleBoardClick);
}
