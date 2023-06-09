"use strict";
// let currentButton = null;
let currentPlayer = false; // false = x , true = o
let stepCounter = 0;
let winAnimationTimeout;
let gamePosition = [
  null, null, null,
  null, null, null,
  null, null, null
];
const restartBtn = document.getElementById('btn-restart');

restartBtn.onclick = () => {
// currentButton = null;
currentPlayer = false; // false = x , true = o
stepCounter = 0;
gamePosition = [
  null, null, null,
  null, null, null,
  null, null, null
];
clearTimeout(winAnimationTimeout)
  const demonstrationVictory = document.getElementById('demonstrationVictory');
  demonstrationVictory.style.animation = 'none';
  demonstrationVictory.style.zIndex = '0';
  demonstrationVictory.style.rotate = '0';
  demonstrationVictory.style.right = '0';
  demonstrationVictory.style.width = '3%';
  demonstrationVictory.style.height = '0';
  const divElement = document.getElementById("buttons");
  const buttons = divElement.querySelectorAll("#buttons button");
  buttons.forEach(function (button) {
    button.disabled = false;
    button.style.backgroundImage = 'none';
  });

}

function clickButton(currentButton, iconPosition) {
  stepCounter++;
  currentButton.disabled = true; // deactivate curent button

  if (gamePosition[iconPosition - 1] === null) {
    if (currentPlayer === true) {
      gamePosition[iconPosition - 1] = 'o';
    } else {
      gamePosition[iconPosition - 1] = 'x';
    }
  }

  showMove(currentButton);
  chengePlayer();
 
  if (stepCounter >= 5) {
    if(checkFinishGame()){
      const playerAvatar = document.querySelector('#player-avatar-circle img');
      playerAvatar.style.animation = 'none';
      const lastPlayerAvatar = document.querySelector('#player-avatar-xmark img');
      lastPlayerAvatar.style.animation = 'none';

    }
  }
}
function chengePlayer (){
  if (currentPlayer === false) {//chenge player
    currentPlayer = true
    
    const lastPlayerAvatar = document.querySelector('#player-avatar-xmark img');
    lastPlayerAvatar.style.animation = 'none';
    const playerAvatar = document.querySelector('#player-avatar-circle img');
    playerAvatar.style.animation = 'pulse-avatar 1s infinite';
  } else {
    currentPlayer = false;
    const lastPlayerAvatar = document.querySelector('#player-avatar-circle img');
    lastPlayerAvatar.style.animation = 'none';
    const playerAvatar = document.querySelector('#player-avatar-xmark img');
    playerAvatar.style.animation = 'pulse-avatar 1s infinite';
  }
}
function showWinerLine(winLine) {
  console.log(winLine)
  const demonstrationVictory = document.getElementById('demonstrationVictory');
  demonstrationVictory.style.zIndex = '2';
  if (winLine >= 0 && winLine < 3) {
    demonstrationVictory.style.left = '-1.5%';
    demonstrationVictory.style.rotate = '-90deg';
    demonstrationVictory.style.height = '100%';
  }
  if (winLine >= 3 && winLine < 9) {
    demonstrationVictory.style.top = '0'
    demonstrationVictory.style.left = '0';
    demonstrationVictory.style.height = '100%';
    demonstrationVictory.style.rotate = '0deg';
  }
  if (winLine === 6) {
    // debugger
    demonstrationVictory.style.left = '98.5%';
    demonstrationVictory.style.rotate = '45deg';
    demonstrationVictory.style.height = '140%';
  }
  if (winLine === 7) {
    demonstrationVictory.style.right = '-80.5%';
    // demonstrationVictory.style.rotate = '45deg';
    demonstrationVictory.style.height = '140%';
  }
  demonstrationVictory.style.animation = 'win-animation 3s forwards';
  switch (winLine) {
    case 0:
      demonstrationVictory.style.top = '16%';
      break;
    case 1:
      demonstrationVictory.style.top = '50%';
      break;
    case 2:
      demonstrationVictory.style.top = '84%';
      break;
    case 3:
      demonstrationVictory.style.left = '14.5%';
      break;
    case 4:
      demonstrationVictory.style.left = '48.5%';
      break;
    case 5:
      demonstrationVictory.style.left = '82.5%';
      break;
    case 6:
      demonstrationVictory.style.right = '-1.5%';
      demonstrationVictory.style.rotate = '45deg';
      break;
    case 7:
      demonstrationVictory.style.left = '-1.5%';
      demonstrationVictory.style.rotate = '-45deg';
      break;


    default:
      break;
  }
}
function disabledButtons() {
  const divElement = document.getElementById("buttons");
  const buttons = divElement.querySelectorAll("#buttons button");
  buttons.forEach(function (button) {
    button.disabled = true;
  });
}
function checkFinishGame() {
  let playerCheck = 'x'
  if (currentPlayer === false) {
    playerCheck = 'o';
  }
  // console.log(playerCheck)
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [2, 4, 6],
    [0, 4, 8],
  ]
  // debugger
  for (let i = 0; i < winLines.length; i++) {
    // debugger
    const [firstElem, midleElem, lastElem] = winLines[i];
    if (gamePosition[firstElem] == playerCheck &&
      gamePosition[firstElem] === gamePosition[midleElem] &&
      gamePosition[midleElem] === gamePosition[lastElem]) {
      // debugger
      disabledButtons();
      winAnimationTimeout = setTimeout(() => {
        showWinerLine(i);
      }, 700)

      return true;
    }
  }
}




function showMove(currentButton) {
  if (currentPlayer === false) {
    currentButton.style.backgroundImage = 'url("./images/xmark.png")';
  }
  else {
    currentButton.style.backgroundImage = 'url("./images/circle.png")';
  }
}


