let xScore = 0;
let oScore = 0;

let currentButton = null;
let currentPlayer = false; // false = x , true = o
let stepCounter = 0;
const gamePosition = [
  null, null, null,
  null, null, null,
  null, null, null
];

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
  if (stepCounter >= 5) {
    checkFinishGame();
  }

  showMove(currentButton); // chenge player
  if (currentPlayer === false) {
    currentPlayer = true
  } else {
    currentPlayer = false;
  }
}

function checkFinishGame() {
  let playerCheck = 'o'
  if (currentPlayer === false) {
    playerCheck = 'x';
  }
  // console.log(playerCheck)
  const winLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,9],
    [2,4,6],
    [0,4,8],
   ]
// debugger
   for(let i = 0; i < winLines.length;i++){
    const [firstElem , midleElem, lastElem] = winLines[i];
    if(gamePosition[firstElem] === gamePosition[midleElem] && gamePosition[midleElem]=== gamePosition[lastElem]){
      // console.log(playerCheck + " winn")
      
      break;
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


