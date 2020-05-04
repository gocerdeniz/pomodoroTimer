let counter = document.getElementById("counter");
let startButton = document.getElementById("startButton");
let pauseButton = document.getElementById("pauseButton");
let breakButton = document.getElementById("breakButton");
let minutes = 24;

startButton.addEventListener("mouseover", function(){
  counter.innerHTML = "25:00";
})
breakButton.addEventListener("mouseover", function(){
  counter.innerHTML = "05:00";
})


function startCounter() {
  var seconds = 0;
  var interval;
  startButton.classList.add("d-none");
  breakButton.classList.add("d-none");
  let isPaused = false;

  if (!isPaused) {
    function countDown() {
      seconds = minutes * 60;
      pauseButton.addEventListener("click", function toggle() {
        if(isPaused) {        } else if(!isPaused) {
            isPaused = !isPaused;
        };
      });
    
      interval = setInterval(() => {
        seconds--;
        if(isPaused){
            clearInterval(interval);
            isPaused = !isPaused;
        }else if (!seconds) {
          alert("Döngü başarıyla tamamlandı.");
        } else if (seconds % 60 == 0) {
          let kalan = "00";
          counter.innerHTML = minutes + ":" + kalan;
          minutes--;
        } else if (seconds % 60 < 10) {
          let kalan = "0" + (seconds % 60);
          counter.innerHTML = minutes + ":" + kalan;
        } else {
          kalanaBak();
          function kalanaBak() {
            let kalan = seconds % 60;
            counter.innerHTML = minutes + ":" + kalan;
          }
        }
      }, 1000);
      
    }
    countDown();
  } 
}


function breakCounter() {
  var seconds = 0;
  var interval;
  breakButton.classList.add("d-none");
  startButton.classList.add("d-none");

  let isPaused = false;
  minutes = 4;

  if (!isPaused) {
    function countDown() {
      seconds = minutes * 60;
      pauseButton.addEventListener("click", function toggle() {
        if(isPaused) {        } else if(!isPaused) {
            isPaused = !isPaused;
        };
      });
    
      interval = setInterval(() => {
        seconds--;
        if(isPaused){
            clearInterval(interval);
            isPaused = !isPaused;
        }else if (!seconds) {
          alert("Döngü başarıyla tamamlandı.");
        } else if (seconds % 60 == 0) {
          let kalan = "00";
          counter.innerHTML = minutes + ":" + kalan;
          minutes--;
        } else if (seconds % 60 < 10) {
          let kalan = "0" + (seconds % 60);
          counter.innerHTML = minutes + ":" + kalan;
        } else {
          kalanaBak();
          function kalanaBak() {
            let kalan = seconds % 60;
            counter.innerHTML = minutes + ":" + kalan;
          }
        }
      }, 1000);
      
    }
    countDown();
  } 
}
