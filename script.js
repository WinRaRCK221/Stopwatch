var sec = 0;
var min = 0;
var hr = 0;
var stopTime = true;

function startTime() {
  if (stopTime == true) {
    stopTime = false;
    timeCycle();
  }
}

function timeCycle() {
  
  if (stopTime == false)
  {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    sec = sec + 1;

    if (sec == 60)
    {
      min = min +1;
      sec = 0
    }
    if (min == 60)
    {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if(sec < 10 || sec == 0)
    {
      sec = '0'+sec;
    }
    if(min < 10 || min == 0)
    {
      min = '0'+min;
    }
    if(hr < 10 || hr == 0)
    {
      hr = '0'+hr;
    }
    setTimeout("timeCycle()",1000);

    document.getElementById("timerobj").innerHTML = hr +":"+min+":"+sec + " seconds";
  }
}
function stoptimer(){
  if (stopTime == false)
  {
    stopTime = true;
  }
}
function resetTime()
{
  stopTime = true;
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("timerobj").innerHTML = '00:00:00 seconds';
}
