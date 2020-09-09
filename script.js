
function change(){ 
countdown();
setInterval(countdown,1000);
}


function countdown(){
    myYear = document.getElementById("start");

if(myYear && myYear.value){
const disp = document.getElementById("newDate");
disp.innerHTML = " " + myYear.value;
}
const daye = document.getElementById("days");
const houre = document.getElementById("hours");
const mine = document.getElementById("mins");
const sece = document.getElementById("sec");

const newYear = myYear.value;


    const newyearDate = new Date(newYear);
    const currDate = new Date();

    if(currDate < newyearDate){
    const totalSec =  (newyearDate - currDate) / 1000;

    const days = Math.floor(totalSec/3600/24);
    const hours = Math.floor(totalSec/3600)%24;
    const mins = Math.floor(totalSec/60)%60;
    const sec = Math.floor(totalSec)%60;

    daye.innerHTML = days;
    houre.innerHTML = formateTime(hours);
    mine.innerHTML = formateTime(mins);
    sece.innerHTML = formateTime(sec);
    }
    else{
        daye.innerHTML = "0";
        houre.innerHTML = "0";
        mine.innerHTML = "0";
        sece.innerHTML = "0";
    }
}

function formateTime(time){
    return time < 10 ? `0${time}`:time;
}



