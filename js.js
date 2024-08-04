let boxes = document.querySelectorAll(".box");
let actualgame = document.querySelector(".actualgame");
let animation = document.querySelector(".animation");
let level = document.querySelector(".level");

let boys = document.querySelectorAll(".boy");
let reset = document.querySelector("#reset");
let turnO = true;
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let numbdiv = document.querySelectorAll(".numbers");

let numbers = document.querySelectorAll(".boxy");
var num = 11;
var sought = 0;
var checking = 0;
var win = 0;
var x;
const winpatterns = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
  [0, 9, 18, 27, 36, 45, 54, 63, 72],
  [1, 10, 19, 28, 37, 46, 55, 64, 73],
  [2, 11, 20, 29, 38, 47, 56, 65, 74],
  [3, 12, 21, 30, 39, 48, 57, 66, 75],
  [4, 13, 22, 31, 40, 49, 58, 67, 76],
  [5, 14, 23, 32, 41, 50, 59, 68, 77],
  [6, 15, 24, 33, 42, 51, 60, 69, 78],
  [7, 16, 25, 34, 43, 52, 61, 70, 79],
  [8, 17, 26, 35, 44, 53, 62, 71, 80],
];
const resetgame = () => {
  turnO = true;
  boys.forEach((boy) => {
    num = 11;
    boy.style.backgroundColor = "#020b0f";
  });
  enablebtn();
  level.classList.remove("hide");
  actualgame.classList.add("hide");
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (num != 11) {
      box.innerText = num;
      /*if (turnO) {
      box.classList.add("fo");
      box.innerText = num;
      turnO = false;
    } else {
      box.classList.remove("fo");
      box.innerText = num;
      turnO = true;
    }*/
      //TO MAKE A BUTTON DISABLE AFTER ONE CLICK
      box.disabled = true;
      checkWinner();
    }
  });
});
const disablebtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (win) => {
  msg.innerText = ` ${win}line is soughted out `;
  if (win == 18) {
    msgcontainer.classList.remove("hide");
    disablebtn();
  }
};

const showwrong = () => {
  msg.innerText = ` u can't place 2 no. in a line`;

  msgcontainer.classList.remove("hide");
  disablebtn();
};
const checkWinner = () => {
  for (let pattern of winpatterns) {
    /*let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    let pos4 = boxes[pattern[3]].innerText;
    let pos5 = boxes[pattern[4]].innerText;
    let pos6 = boxes[pattern[5]].innerText;
    let pos7 = boxes[pattern[6]].innerText;
    let pos8 = boxes[pattern[7]].innerText;
    let pos9 = boxes[pattern[8]].innerText;*/
    let pos = [
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText,
      boxes[pattern[3]].innerText,
      boxes[pattern[4]].innerText,
      boxes[pattern[6]].innerText,
      boxes[pattern[7]].innerText,
      boxes[pattern[8]].innerText,
    ];
    check2(pos);
    x = 0;
    soughtout(pos);

    if (sought == 9) {
      checking = 0;
      check(pos);
      if (checking == 1) {
        showWinner(win);
        break;
      } else {
        console.log("no");
      }
    }
  }
};
newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    boys.forEach((boy) => {
      boy.style.backgroundColor = "#020b0f";
    });

    number.style.backgroundColor = "#089833";
    num = number.innerText;
  });
});
const soughtout = (pos) => {
  for (let i = 0; i < 9; i++) {
    if (pos[i] != "") {
      x++;
    }
  }
  if (x == 9) {
    sought == 9;
  }
};

const check = (pos) => {
  const checkset = new Set(pos);
  if (checkset.size === pos.length) {
    checking = 1;
    console.log(win);
    win++;
    console.log(win);
  } else {
    showwrong();
  }
};
const check2 = (pos) => {
  let arr = pos.filter((element) => element != "");
  const checkset = new Set(arr);
  if (checkset.size === arr.length) {
  } else {
    showwrong();
  }
};

/*my animation code */
const cursor = document.querySelector(".cursor");
const play1btn = document.querySelector(".play1btn");

const wordElement = document.getElementById("hover-word");
const hide = document.querySelector(".hide");
const invi = document.getElementById("invi");
document.addEventListener("DOMContentLoaded", () => {
  const text = wordElement.textContent;
  wordElement.innerHTML = "";

  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("letter");
    wordElement.appendChild(span);
  });
});

var timeout;
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

hide.addEventListener("mouseover", () => {
  /*alert("this ee");*/
  cursor.style.visibility = "hidden";
});
hide.addEventListener("mouseout", () => {
  /*alert("this ee");*/
  cursor.style.visibility = "visible";
});

/*for invi*/
invi.addEventListener("mouseover", () => {
  /*alert("this ee");*/
  cursor.style.visibility = "hidden";
});
invi.addEventListener("mouseout", () => {
  /*alert("this ee");*/
  cursor.style.visibility = "visible";
});

/*link*/
invi.addEventListener("click", () => {
  /*actualgame.classList.remove("hide");*/
  level.classList.remove("hide");
  animation.classList.add("hide");

  /* play1btn.style.display = "none";
  wordElement.style.display = "none";*/
});
/*numbdiv.addEventListener("mouseover", () => {
  console.log("tjfcthxfcfx");
  cursor.style.visibility = "hidden";
});
numbdiv.addEventListener("mouseout", () => {
  
  cursor.style.visibility = "visible";
});*/

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
easy.addEventListener("click", () => {
  level.classList.add("hide");
  actualgame.classList.remove("hide");
  boxes[1].innerText = 2;
  boxes[1].disabled = true;
  boxes[2].innerText = 6;
  boxes[2].disabled = true;
  boxes[3].innerText = 3;
  boxes[3].disabled = true;
  boxes[4].innerText = 5;
  boxes[4].disabled = true;
  boxes[8].innerText = 1;
  boxes[8].disabled = true;
  boxes[9].innerText = 8;
  boxes[9].disabled = true;
  boxes[11].innerText = 1;
  boxes[11].disabled = true;
  boxes[13].innerText = 6;
  boxes[13].disabled = true;
  boxes[21].innerText = 8;
  boxes[21].disabled = true;
  boxes[22].innerText = 1;
  boxes[22].disabled = true;
  boxes[23].innerText = 9;
  boxes[23].disabled = true;
  boxes[24].innerText = 5;
  boxes[24].disabled = true;
  boxes[26].innerText = 6;
  boxes[26].disabled = true;
  boxes[27].innerText = 3;
  boxes[27].disabled = true;
  boxes[29].innerText = 2;
  boxes[29].disabled = true;
  boxes[33].innerText = 1;
  boxes[33].disabled = true;
  boxes[35].innerText = 5;
  boxes[35].disabled = true;
  boxes[36].innerText = 5;
  boxes[36].disabled = true;
  boxes[39].innerText = 9;
  boxes[39].disabled = true;
  boxes[46].innerText = 9;
  boxes[46].disabled = true;
  boxes[48].innerText = 2;
  boxes[48].disabled = true;
  boxes[49].innerText = 4;
  boxes[49].disabled = true;
  boxes[51].innerText = 8;
  boxes[51].disabled = true;
  boxes[52].innerText = 6;
  boxes[52].disabled = true;
  boxes[53].innerText = 3;
  boxes[53].disabled = true;
  boxes[56].innerText = 5;
  boxes[56].disabled = true;
  boxes[57].innerText = 4;
  boxes[57].disabled = true;
  boxes[58].innerText = 9;
  boxes[58].disabled = true;
  boxes[69].innerText = 7;
  boxes[69].disabled = true;
  boxes[64].innerText = 3;
  boxes[64].disabled = true;
  boxes[65].innerText = 4;
  boxes[65].disabled = true;
  boxes[66].innerText = 1;
  boxes[66].disabled = true;
  boxes[67].innerText = 2;
  boxes[67].disabled = true;
  boxes[69].innerText = 9;
  boxes[69].disabled = true;
  boxes[70].innerText = 5;
  boxes[70].disabled = true;
  boxes[75].innerText = 5;
  boxes[75].disabled = true;
  boxes[76].innerText = 8;
  boxes[76].disabled = true;
  boxes[79].innerText = 7;
  boxes[79].disabled = true;
});
hard.addEventListener("click", () => {
  level.classList.add("hide");
  actualgame.classList.remove("hide");
  boxes[1].innerText = 2;
  boxes[1].disabled = true;
  boxes[2].innerText = 6;
  boxes[2].disabled = true;
  boxes[3].innerText = 3;
  boxes[3].disabled = true;
  boxes[4].innerText = 5;
  boxes[4].disabled = true;
  boxes[8].innerText = 1;
  boxes[8].disabled = true;
  boxes[9].innerText = 8;
  boxes[9].disabled = true;
  boxes[11].innerText = 1;
  boxes[11].disabled = true;
  boxes[13].innerText = 6;
  boxes[13].disabled = true;
  boxes[21].innerText = 8;
  boxes[21].disabled = true;
  boxes[22].innerText = 1;
  boxes[22].disabled = true;
  boxes[23].innerText = 9;
  boxes[23].disabled = true;
  boxes[24].innerText = 5;
  boxes[24].disabled = true;
  boxes[26].innerText = 6;
  boxes[26].disabled = true;
  boxes[27].innerText = 3;
  boxes[27].disabled = true;
  boxes[29].innerText = 2;
  boxes[29].disabled = true;
  boxes[33].innerText = 1;
  boxes[33].disabled = true;
  boxes[35].innerText = 5;
  boxes[35].disabled = true;
  boxes[36].innerText = 5;
  boxes[36].disabled = true;
  boxes[39].innerText = 9;
  boxes[39].disabled = true;
  boxes[46].innerText = 9;
  boxes[46].disabled = true;
  boxes[48].innerText = 2;
  boxes[48].disabled = true;
  boxes[49].innerText = 4;
  boxes[49].disabled = true;
  boxes[51].innerText = 8;
  boxes[51].disabled = true;
  boxes[52].innerText = 6;
  boxes[52].disabled = true;
  boxes[53].innerText = 3;
  boxes[53].disabled = true;
  boxes[56].innerText = 5;
  boxes[56].disabled = true;
  boxes[57].innerText = 4;
  boxes[57].disabled = true;
  boxes[58].innerText = 9;
  boxes[58].disabled = true;
  boxes[69].innerText = 7;
  boxes[69].disabled = true;
  boxes[64].innerText = 3;
  boxes[64].disabled = true;
  boxes[65].innerText = 4;
  boxes[65].disabled = true;
  boxes[66].innerText = 1;
  boxes[66].disabled = true;
  boxes[67].innerText = 2;
  boxes[67].disabled = true;
  boxes[69].innerText = 9;
  boxes[69].disabled = true;
  boxes[70].innerText = 5;
  boxes[70].disabled = true;
  boxes[75].innerText = 5;
  boxes[75].disabled = true;
  boxes[76].innerText = 8;
  boxes[76].disabled = true;
  boxes[79].innerText = 7;
  boxes[79].disabled = true;
});
medium.addEventListener("click", () => {
  level.classList.add("hide");
  actualgame.classList.remove("hide");
  boxes[1].innerText = 2;
  boxes[1].disabled = true;
  boxes[2].innerText = 6;
  boxes[2].disabled = true;
  boxes[3].innerText = 3;
  boxes[3].disabled = true;
  boxes[4].innerText = 5;
  boxes[4].disabled = true;
  boxes[8].innerText = 1;
  boxes[8].disabled = true;
  boxes[9].innerText = 8;
  boxes[9].disabled = true;
  boxes[11].innerText = 1;
  boxes[11].disabled = true;
  boxes[13].innerText = 6;
  boxes[13].disabled = true;
  boxes[21].innerText = 8;
  boxes[21].disabled = true;
  boxes[22].innerText = 1;
  boxes[22].disabled = true;
  boxes[23].innerText = 9;
  boxes[23].disabled = true;
  boxes[24].innerText = 5;
  boxes[24].disabled = true;
  boxes[26].innerText = 6;
  boxes[26].disabled = true;
  boxes[27].innerText = 3;
  boxes[27].disabled = true;
  boxes[29].innerText = 2;
  boxes[29].disabled = true;
  boxes[33].innerText = 1;
  boxes[33].disabled = true;
  boxes[35].innerText = 5;
  boxes[35].disabled = true;
  boxes[36].innerText = 5;
  boxes[36].disabled = true;
  boxes[39].innerText = 9;
  boxes[39].disabled = true;
  boxes[46].innerText = 9;
  boxes[46].disabled = true;
  boxes[48].innerText = 2;
  boxes[48].disabled = true;
  boxes[49].innerText = 4;
  boxes[49].disabled = true;
  boxes[51].innerText = 8;
  boxes[51].disabled = true;
  boxes[52].innerText = 6;
  boxes[52].disabled = true;
  boxes[53].innerText = 3;
  boxes[53].disabled = true;
  boxes[56].innerText = 5;
  boxes[56].disabled = true;
  boxes[57].innerText = 4;
  boxes[57].disabled = true;
  boxes[58].innerText = 9;
  boxes[58].disabled = true;
  boxes[69].innerText = 7;
  boxes[69].disabled = true;
  boxes[64].innerText = 3;
  boxes[64].disabled = true;
  boxes[65].innerText = 4;
  boxes[65].disabled = true;
  boxes[66].innerText = 1;
  boxes[66].disabled = true;
  boxes[67].innerText = 2;
  boxes[67].disabled = true;
  boxes[69].innerText = 9;
  boxes[69].disabled = true;
  boxes[70].innerText = 5;
  boxes[70].disabled = true;
  boxes[75].innerText = 5;
  boxes[75].disabled = true;
  boxes[76].innerText = 8;
  boxes[76].disabled = true;
  boxes[79].innerText = 7;
  boxes[79].disabled = true;
});
