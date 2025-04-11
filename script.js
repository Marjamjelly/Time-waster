let seconds = 0;

function incrementCounter() {
    counter++;
    document.getElementById("time").textContent = seconds;
  }

  const intervalId = setInterval(incrementCounter, 1000);