var counter = 0;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    //console.log(number);
    number.innerHTML = counter;
}

function interval(){
        counter++;
        // write some code here
        if(counter == 61){
          counter = 0;
        }
        showNumber(counter);
}
setInterval(interval, 500);
