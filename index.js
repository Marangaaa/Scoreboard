let scoreA = 0;
let scoreB = 0;
let fouls1 = 0;
let fouls2 = 0;
let currentHalf = 1;
let time = 600; 
let timerInterval;

function addPoints(team, points) {
  if(team === 1){
    scoreA += points;
    document.getElementById("scoreA").textContent = scoreA;
  } else {
    scoreB += points;
    document.getElementById("scoreB").textContent = scoreB;
  }
}

function addFoul(team) {
  if (team === 1) {
    fouls1++;
    document.getElementById("fouls1").textContent = fouls1;
  } else {
    fouls2++;
    document.getElementById("fouls2").textContent = fouls2;
  }
}

function nextHalf() {
  currentHalf++;
  if (currentHalf > 5) currentHalf = 1;
  document.getElementById("halfTime").textContent = currentHalf;
}

function updateTime() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("time").textContent =
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateTime();
      } else {
        stopTimer();
        alert("Game Over!");
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetGame() {
  
  scoreA = scoreB = fouls1 = fouls2 = 0;
  currentHalf = 1;
  time = 600; 

  document.getElementById("scoreA").textContent = 0;
  document.getElementById("scoreB").textContent = 0;
  document.getElementById("fouls1").textContent = 0;
  document.getElementById("fouls2").textContent = 0;
  document.getElementById("halfTime").textContent = 1;
  updateTime();

  stopTimer();   
  startTimer();  
}
updateTime();