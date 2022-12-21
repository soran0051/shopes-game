var startBtn = document.querySelector("button.startBtn");
var gridDiv = document.querySelectorAll("div.gameboard-grid");
var scoreShow = document.querySelector("h3.header-scores");
var timerShow = document.querySelector("h3.header-timer");
var startOverlay = document.querySelector("div.start-modal");
var i = 0;
var shapeMakerTimeOut;
var shapeMakeInterval;
var shapeRandomRenderTimeout;
var a = 59;
function score() {
  scoreShow.innerHTML = "Score " + " : " + i;
}



function shapeMaker() {
    shapeMakeInterval = setInterval(function () {
    var divRandom = Math.floor(Math.random() * 12);
    var shapeNumber = Math.floor(Math.random() * 4);
    var shape = document.createElement("div");
    shape.style.scale = 0;
    console.log(shapeNumber);
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
        i += Number(shape.getAttribute("score"));
        score();
        shape.style.scale = 0;
      });
      console.log(i);
    }, 1000);
    gridDiv[divRandom].innerHTML = "";
  }, 1000);
}

startBtn.addEventListener("click", () => {
    a++
  startOverlay.style.scale = 0;
  timer();
  shapeMakerTimeOut= setTimeout(shapeMaker(),6000);
});

var timer=()=>{
    var timerCounter = setInterval(()=>{
        if(a==0){
            close();
            clearInterval(timerCounter)
            alert("time is over")
            a=59;

        }else{
            a--;
            timerShow.innerHTML = "Timer " + " : " + a;
        }
       console.log("timer : " + a)
    },1500)
}

function close(){
    gridDiv.forEach(function(e){
        e.innerHTML=""
    })
    clearTimeout(shapeRandomRenderTimeout)
    clearInterval(shapeMakeInterval)
    clearTimeout(shapeMakerTimeOut);
    startOverlay.style.scale=1;
}