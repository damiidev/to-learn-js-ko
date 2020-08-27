const clockContainter = document.querySelector(".clock-container");
const clockText = clockContainter.querySelector("h3");

let startTime = 30;
let realScore = 10;

const timer = () => {
    if (startTime > 0){
        startTime -=1;
        clockText.innerText=`00:${startTime< 10? `0${startTime}` :startTime}`
    }     
    else {
        clearInterval(setTime);
        alert("시간 초과!! 다음 문제로 이동합니다 :)")
        location.href ="game2.html";
    }   
    
}


const setTime = setInterval(timer,1000); 