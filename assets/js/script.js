document.addEventListener("dOMcontentLoaded", function() {
   let button = document.getElementsByTagName("button")

   for (let button of buttons) {
      button.addEventListener(click, function(){
         if (this.getAttribute("data-type") === "easy") {
            let GameDif = this.getAttribute("data-type");
            runGame();
         }
      })
   }
});

function runGame(gameDif) {
   
}


/**
 * creates large game board.
 */

let board = document.getElementById("board");
let newDiv = `<div id="small-grid"></div>`;
board.innerHTML = newDiv;
let cardContainer = "";
for (let i = 0; i < 16; i++) {
   cardContainer += `<div class="card box${i}"><h1>hi${i}</h1></div>`;
}
let container = document.getElementById("small-grid");
container.innerHTML = cardContainer;