const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minutesE1=document.getElementById('mins');
const secondsE1=document.getElementById('seconds');

const diwali="28 october 2022";

function countdown(){
    const diwaliDate=new Date(diwali);
    const currentDate=new Date();

    const totalSeconds=(diwaliDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    console.log(days);
    const hours=Math.floor(totalSeconds/3600)%24;
    console.log(hours);
    const mins=Math.floor(totalSeconds/60)%60;
    console.log(mins);
    const seconds=Math.floor(totalSeconds)%60;
    console.log(seconds);

    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minutesE1.innerHTML=mins;
    secondsE1.innerHTML=seconds;

}

//initial call
countdown();

setInterval(countdown,1000);
