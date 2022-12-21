var startBtn = document.querySelector("button.startBtn");
var gridDiv = document.querySelectorAll("div.gameboard-grid");
var scoreShow = document.querySelector("h3.header-scores");
var timerShow = document.querySelector("h3.header-timer");
var startOverlay = document.querySelector("div.start-modal");

// function makeShape(){
//     setInterval(()=>{
//         var a = Math.floor((Math.random()*13))
//         setTimeout(()=>{
//             gridDiv[a].innerHTML= "hello"
//         },2000)
//     gridDiv[a].innerHTML = ""
//     },1000)
// }

// var  shape
// function shape(){

//     shapeMaker();
// }

function shapeMaker() {
  setInterval(function () {
    var divRandom = Math.floor(Math.random() * 12);
    var shapeNumber = Math.floor(Math.random() * 4);
    var shape = document.createElement("div")
    setTimeout(function(){
        if(gridDiv[divRandom].innerHTML=""){
            switch (shapeNumber) {
                case 0:
                    {
                        shape.classList.add("circle")
                    }
                    break;
            
                default:
                    break;
            }
        }
    })
//     setTimeout(function () {
//       if (shapeNumber == 0 && gridDiv[divRandom].innerHTML == "") {
//         var shape = document.createElement("div");
//         shape.classList.add("circle");
//         gridDiv[divRandom].appendChild(shape);
//         console.log(shape);
//       } else if (shapeNumber == 1 && gridDiv[divRandom].innerHTML == "") {
//         var shape = document.createElement("div");
//         shape.classList.add("tringle");
//         console.log(shape);
//         gridDiv[divRandom].appendChild(shape);
//       } else if (shapeNumber == 2 && gridDiv[divRandom].innerHTML == "") {
//         var shape = document.createElement("div");
//         shape.classList.add("arrow");
//         console.log(shape);
//         gridDiv[divRandom].appendChild(shape);
//       } else if (shapeNumber == 3 && gridDiv[divRandom].innerHTML == "") {
//         var shape = document.createElement("div");
//         shape.classList.add("star");
//         console.log(shape);
//         gridDiv[divRandom].appendChild(shape);
//       }
//     }, 1000);
//     gridDiv[divRandom].innerHTML = "";
  }, 1000);
}

startBtn.addEventListener("click", () => {
  startOverlay.style.scale = 0;
  shapeMaker();
});
