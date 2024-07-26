let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;

let wining = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.classList.add("O-js");
      box.classList.remove("X-js");
      turn0 = false;
    } else {
      box.classList.add("X-js");
      box.classList.remove("O-js");
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const enabel = () => {
  for (const box of boxs) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disabled = () => {
  for (const box of boxs) {
    box.disabled = true;
  }
};

function resetcolor(box1, box2, box3) {
  box1.style.backgroundColor = "#fefcff";
  box2.style.backgroundColor = "#fefcff";
  box3.style.backgroundColor = "#fefcff";
}

function cngcolor(box1, box2, box3) {
  box1.style.backgroundColor = "greenyellow";
  box2.style.backgroundColor = "greenyellow";
  box3.style.backgroundColor = "greenyellow";
}

const showWinner = (win) => {
  msg.innerText = `Congratulation Winner is ${win}`;
  msgContainer.classList.remove("hide");
  disabled();
};
const checkwinner = () => {
  for (let pattern of wining) {
    let pos1val = boxs[pattern[0]].innerHTML;

    let pos2val = boxs[pattern[1]].innerHTML;
    let pos3val = boxs[pattern[2]].innerHTML;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos1val === pos3val) {
        showWinner(pos1val);
        b1 = boxs[pattern[0]];
        b2 = boxs[pattern[1]];
        b3 = boxs[pattern[2]];
        cngcolor(b1, b2, b3);
      }
    }
  }
};
resetbtn.forEach((reset) => {
  const resetGame = () => {
    turn0 = true;
    enabel();
    resetcolor(b1, b2, b3);
    msgContainer.classList.add("hide");
  };
  reset.addEventListener("click", resetGame);
});
