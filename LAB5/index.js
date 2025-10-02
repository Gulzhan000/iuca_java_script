const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

let minutes = 0;
let seconds = 0;

function updateCounter() {
  const minStr = String(minutes).padStart(2, '0');
  const secStr = String(seconds).padStart(2, '0');
  counter.textContent = `${minStr}:${secStr}`;
}

updateCounter();

plus.addEventListener("click", function(){
  document.body.style.backgroundColor = "lightgreen"; // фон светло-зеленый
  counter.style.color = "lightcoral"; // цифры светло-красные
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  updateCounter();
});

minus.addEventListener("click", function(){
  document.body.style.backgroundColor = "lightcoral";
  counter.style.color = "lightgreen";
  if (seconds > 0 || minutes > 0) {
    if (seconds === 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }
  }
  updateCounter();
});

reset.addEventListener("click", function(){
  document.body.style.backgroundColor = "gray";
  counter.style.color = "black";
  minutes = 0;
  seconds = 0;
  updateCounter();
});
