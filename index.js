 let scoreA = 0;
    let scoreB = 0;
    let foulsA = 0;
    let foulsB = 0;
    let time = 600; // 10 minutes in seconds
    let timerInterval;

    function addPoints(team, points) {
      if (team === 'A') {
        scoreA += points;
        document.getElementById("scoreA").textContent = scoreA;
      } else {
        scoreB += points;
        document.getElementById("scoreB").textContent = scoreB;
      }
    }

    function addFoul(team) {
      if (team === 'A') {
        foulsA++;
        document.getElementById("foulsA").textContent = foulsA;
      } else {
        foulsB++;
        document.getElementById("foulsB").textContent = foulsB;
      }
    }

    function resetGame() {
      scoreA = 0;
      scoreB = 0;
      foulsA = 0;
      foulsB = 0;
      time = 600;
      updateTime();
      document.getElementById("scoreA").textContent = 0;
      document.getElementById("scoreB").textContent = 0;
      document.getElementById("foulsA").textContent = 0;
      document.getElementById("foulsB").textContent = 0;
      stopTimer();
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

    updateTime();