var currentLight;
var trafficLight = ["red", "yellow", "green"];

function changeRed() {
  currentLight = trafficLight[0];
  document.getElementById("redLight").style.backgroundColor = "red";
  document.getElementById("yellowLight").style.backgroundColor = "#403c3b";
  document.getElementById("greenLight").style.backgroundColor = "#403c3b";
}

function changeYellow() {
  currentLight = trafficLight[1];
  document.getElementById("redLight").style.backgroundColor = "#403c3b";
  document.getElementById("yellowLight").style.backgroundColor = "yellow";
  document.getElementById("greenLight").style.backgroundColor = "#403c3b";
}
function changeGreen() {
  currentLight = trafficLight[2];
  document.getElementById("redLight").style.backgroundColor = "#403c3b";
  document.getElementById("yellowLight").style.backgroundColor = "#403c3b";
  document.getElementById("greenLight").style.backgroundColor = "green";
}

function changeLight() {
  switch (currentLight) {
    case trafficLight[0]:
      changeYellow();
      break;
    case trafficLight[1]:
      changeGreen();
      break;
    default:
      changeRed();
      break;
  }
}

function startTimer() {
  var date, time;
  var timerDisplay = document.querySelector("#timer");

  setInterval(function() {
    date = new Date();
    time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    if(date.getSeconds() % 10 == 0){
      changeLight();
    }
    
    timerDisplay.textContent = time;
  }, 1000);
}
