// allLightsOff switches all the lights off
function allLightsOff(){
    var lights = document.querySelectorAll('.light');
    for (var i = 0; i < lights.length; i++) {
        var light = lights[i];
        light.classList.remove('on');
    }
      // document.querySelectorAll('.light').forEach(function(light){
      //   light.classList.remove('on');
      // });
}
// switchOn adds the 'on' class atribute to the selected element
function switchOn(className){
  allLightsOff();
  var redLight = document.querySelector(className);
  redLight.classList.add('on');
}
// Switches on the go light by passing the '.go' classname to switchOn(classname)
function go(){
  switchOn('.go');
}
// Switches on the stop light by passing the '.stop' classname to switchOn(classname)
function stop(){
  switchOn('.stop');
}
// Switches on the caution light by passing the '.caution' classname to switchOn(classname)
function caution(){
  switchOn('.caution');
}

function captureTimeChange(cb){
  var timeLeft = document.querySelector("#timeLeft");
  var number = document.querySelector("#number");

  timeLeft.addEventListener("keyup", function(evt){
      var num = Number(evt.target.value);
      if(num < 0 || num > 60){
        num = 0;
        timeLeft.value = 0;
      }
      number.innerHTML = num;
      setTimeout(function(){
      cb(num);
    }, 0)
  });
}
