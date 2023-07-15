let turn = "X";

const changeturn = () => {
    turn = turn === "X" ? "O" : "X";
};

const checkwin = () => {
    // Add your logic to check for winning conditions here
};

let boxes = document.querySelectorAll(".board");
boxes.forEach(box => {
    box.addEventListener('click', (event) => {
        if (event.target.innerText === ' ') {
            event.target.innerText = turn;
            changeturn();
        }
    });
});

