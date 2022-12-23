var startBtn = document.querySelector("button.startBtn");
var gridDiv = document.querySelectorAll("div.gameboard-grid");
var scoreShow = document.querySelector("h3.header-scores");
var timerShow = document.querySelector("h3.header-timer");
var startOverlay = document.querySelector("div.start-modal");
var userNameInput = document.querySelector("input.userNameInput")
var scoresContainer = document.querySelector("div.scores-container")
var shapeMakerTimeOut;
var shapeMakeInterval;
var shapeRandomRenderTimeout;
var timerSecondCounter = 59;
var scoreCounter = 0;
var userScores=[];
var roundCounter = 0;


startBtn.addEventListener("click", () => {
 if(userNameInput.value==""){
  alert("userName cant be emptey")
 }else{
  startOverlay.style.scale = 0;
  timer();
  shapeMakerTimeOut = setTimeout(shapeMaker(), 6000);
 }
});

var timer = () => {
  var timerCounter = setInterval(() => {
    if (timerSecondCounter == 0) {
      close();
      clearInterval(timerCounter); 
      alert("time is over");
    } else {
      timerSecondCounter--;
      timerShow.innerHTML = "Timer " + " : " + timerSecondCounter;
    }
    console.log("timer : " + timerSecondCounter);
  }, 1000);
};

var shapeMaker=()=> {
  shapeMakeInterval = setInterval(function () {
    var divRandom = Math.floor(Math.random() * 12);
    var shapeNumber = Math.floor(Math.random() * 4);
    var shape = document.createElement("div");
    shape.style.scale = 0;

    shapeRandomRenderTimeout = setTimeout(function () {
      if (gridDiv[divRandom].innerHTML == "") {
        console.log("worked");
        switch (shapeNumber) {
          case 0:
            {
              shape.classList.add("circle");
              shape.setAttribute("score", 1);
              shape.style.scale = 1;
              gridDiv[divRandom].appendChild(shape);
            }
            break;
          case 1:
            {
              shape.classList.add("star");
              shape.setAttribute("score", 1);
              gridDiv[divRandom].appendChild(shape);
              shape.style.scale = 1;
            }
            break;
          case 2:
            {
              shape.classList.add("tringle");
              shape.setAttribute("score", 1);
              gridDiv[divRandom].appendChild(shape);
              shape.style.scale = 1;
            }
            break;
          case 3:
            {
              shape.classList.add("arrow");
              shape.setAttribute("score", 1);
              gridDiv[divRandom].appendChild(shape);
              shape.style.scale = 1;
            }
            break;
        }
      }
      shape.addEventListener("click", function () {
        scoreCounter += Number(shape.getAttribute("score"));
        score();
        shape.style.scale = 0;
      });
    }, 500);
    gridDiv[divRandom].innerHTML = "";
  }, 500);
}

var score=()=> {
  scoreShow.innerHTML = "Score " + " : " + scoreCounter; 
}


var close=()=> {
  gridDiv.forEach(function (e) {
    e.innerHTML = "";
  });
  scoreInit()
  timerSecondCounter = 59;
  scoreShow.innerHTML = "";
  clearTimeout(shapeRandomRenderTimeout);
  clearInterval(shapeMakeInterval);
  clearTimeout(shapeMakerTimeOut);
  startOverlay.style.scale = 1;
}

var scoreInit = ()=>{
  userResult = {
    userName : userNameInput.value,
    Score :scoreCounter
  }
  scoreCounter=0;
  userNameInput.value = "";
  userScores.push(userResult);
  domScore();
}

var domScore = ()=>{
  var scoreBox= document.createElement("div")
  scoreBox.classList.add("score")
  var userNameContainer = document.createElement("h2")
  var userScoreContainer = document.createElement("h2")
  userNameContainer.innerHTML = userScores[roundCounter].userName;
  userScoreContainer.innerHTML = userScores[roundCounter].Score;
  scoreBox.appendChild(userNameContainer)
  scoreBox.appendChild(userScoreContainer)
  scoresContainer.appendChild(scoreBox)
  roundCounter++;
}