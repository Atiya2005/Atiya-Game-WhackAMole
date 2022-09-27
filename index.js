const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

function randomHoles(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return randomHoles(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(500,1000); //get a random time, how long mole will peep
  console.log(time);
  const hole = randomHoles(holes); //get a random hole,  from where mole will peep
  console.log(hole);

  hole.classList.add('up');

  setTimeout(()=>{
    hole.classList.remove('up');
    if(!timeUp){
        peep();
    }
  },time)
}

var clicked = false;
function startGame() {
  if(!clicked){
    clicked = true;
    alert("You have 15 seconds to score!!!");
    scoreBoard.textContent = 0;
    peep();
    setTimeout(() => (timeUp = true), 15000);
  }
}

function wack() {
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole =>mole.addEventListener('click',wack))