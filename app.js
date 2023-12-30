let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".hide");
let msg = document.querySelector(".msg");
let playBtn = document.querySelector(".playBtn");
let resetBtn = document.querySelector(".resetBtn");
let indicator_O = document.querySelector(".indicator_O");
let indicator_X = document.querySelector(".indicator_X");
let turnO = true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let count = "";
boxes.forEach(box => {
    box.addEventListener("click", () => {
        count ++;
        if(turnO){
            box.innerHTML = "O";
            indicator_O.style.display = "none";
            indicator_X.style.display = "block";
            turnO = false;
        }else{
            box.innerHTML = "X";
            box.style.backgroundColor = "#ff00ff";
            indicator_X.style.display = "none";
            indicator_O.style.display = "block";
            turnO = true;
        }
        if(count == 9){
            winner.classList.remove("hide");
            msg.innerText = "There is no winner, Game has draw!";
        }
        box.disabled = true;
        playAudio();
        checkWinner();
    })

})

let checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                winner.classList.remove("hide");
                showWinner(pos1);
                turnO = true;
                disabledBox();
            }
        }
    }
}

let showWinner = (winner) => {
        msg.innerText = `Congratulations, user "${winner}" You won the Game!`;
}

let disabledBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enabledBox = () => {
    for(let box of boxes){
        turnO = true;
        box.disabled = false;
        box.innerHTML = "";
        winner.classList.add("hide");
        box.style.backgroundColor = "";
        indicator_O.style.display = "block";
        indicator_X.style.display = "none";
        count = 0;
    }
}

resetBtn.addEventListener("click", enabledBox);
playBtn.addEventListener("click", enabledBox);

function playAudio(){
    new Audio("mixkit-opening-software-interface-2578.wav").play();
}