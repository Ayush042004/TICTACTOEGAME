//fetching all the things 
var boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector("#reset-btn");
var newGameBtn = document.querySelector("#new-btn");
var msgContainer = document.querySelector(".msg-container");
var msg = document.querySelector("#msg");

//initially turn 0
var turn0 = true; 

//saving winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//resetgame function
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//Arrow function for game starting.Simultaneously turn of 0 and x after filling boxes the one
// cannot change and after filling all checkwinner call executed.
boxes.forEach ((box) => {
    box.addEventListener("click",() => {
        //turn 0
        if(turn0) {
            box.innerText = "0";
            turn0 = false;
        }// turnx
        else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        count++;

  let isWinner = checkWinner();

  if (count === 9 && !isWinner) {
    gameDraw();
  }
    });
});


//function of draw
const gameDraw =() => {
    msg.innerText = 'Game was a Draw.';
    msgContainer.classList.remove("hide");
    disableBoxes();
};

//function for disabling the box the one filled cannot change it .
const disableBoxes =() => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

// after reset the boxes now enabled with this function and their innertext will be empty.
const enableBoxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//this function is to show winner and remove the hide class so the msg can be shown.
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//checking winner by pattern
const checkWinner = () => {
    for(let pattern of winPatterns) {
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;

     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
        else {

        }
     } 
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);