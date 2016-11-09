captureTimeChange(captureTrafficLightChange);

function captureTrafficLightChange(number){
    //write your code here!
    console.log(number);
    //number is the value entered in the text on the screen
    if(number > 40){
      stop();
    }
    else if(number > 30 && number < 40){
      caution();
    }
    else{
      go();
    }
}
// ****************************************************************************
// **************** THis is for automatic color switch ************************
// ****************************************************************************
