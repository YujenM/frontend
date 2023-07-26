let turn = "X";
game=true;
let move=0;
const changeturn = () => {
    turn = turn === "X" ? "O" : "X";
};

function checkwin() {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        const boxes = document.querySelectorAll('.board');
        if (boxes[a].innerText === turn && boxes[b].innerText === turn && boxes[c].innerText === turn) {
            const player_turn = document.querySelector('.player_turn');
            player_turn.textContent = turn + "won";
            game = false;
            break;
        }
    }
    move++;
    if (move === 9 && game) {
        const player_turn = document.querySelector('.player_turn');
        player_turn.textContent = "Oops! It's a draw!";
        game = false;
    }
}
let boxes = document.querySelectorAll(".board");
boxes.forEach(box => {
    box.addEventListener('click', (event) => {
        if(!game){
            return;
        }
        if (event.target.innerText === '') {
            event.target.innerText = turn;
            checkwin();
            changeturn();
        }
        if (game===true){
            const player_turn= document.querySelector('.player_turn');
            player_turn.textContent= turn+ 'turn';
        }
    });
});
const reset = document.querySelector('button');
reset.addEventListener('click',()=>{
    const boxes=document.querySelectorAll('.board')
    boxes.forEach(box=>{
        box.innerHTML='';
    })
    const player_turn= document.querySelector('.player_turn');
    player_turn.textContent= "Lets play!";
    turn = "X";
    game=true;
    move=0;
})
