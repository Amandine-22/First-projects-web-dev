//We get the information by the html document of who needs to play
const cells = document.querySelectorAll(".cell");
const StatusText = document.getElementById("status");


// We create the Board variable
let Board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

// We determine who is playing 
let CurrentPlayer = "⭐️";

// We make sure the game is still running until someone win 
let GameActive = true;


cells.forEach(cell =>{
    cell.addEventListener("click", () => {
        const index = cell.dataset.index;
        if (Board[index] !== " "){
            StatusText.textContent = "This cell is filled, choose another one.";
        } else{
            Board[index] = CurrentPlayer;
            cell.textContent = CurrentPlayer;
        }

        if (CheckWin()){
            StatusText.textContent = `The player ${CurrentPlayer} won!`;
            GameActive = false;
        } else if (Board.every(cell => cell !== " ")){
            StatusText.textContent = "It's a draw, no one won";
            GameActive = false;
        } else{
            CurrentPlayer = CurrentPlayer=== "⭐️" ?  "🪐" :  "⭐️";
            StatusText.textContent = `Your turn player ${CurrentPlayer};`
            GameActive = true;
        }});

    });

//Function to check is the someone won 
function CheckWin(){
    // Checking all the possible combinaisons for winning
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

    return conditions.some(condition =>{
        const [a, b, c] = condition;
        return Board[a]===CurrentPlayer && Board[b] === CurrentPlayer && Board[c] === CurrentPlayer;
    });
}
