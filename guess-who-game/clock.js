const clockContainter = document.querySelector(".clock-container");
const clockText = clockContainter.querySelector("h3");
const score = document.querySelector(".score");
const totalScore = document.querySelector(".totalScore");


let startTime = 10;
let realScore = 10;
const timer = () => {
    if (startTime > 0){
        startTime -=1;
        clockText.innerText=`00:${startTime< 10? `0${startTime}` :startTime}`
    }     
    else {
        clearInterval(setTime);
        alert("1점 차감됩니다.");
        realScore -=1 ;
        score.innerText = `점수 : ${realScore}점`; //여기 종료 후 다시 타임 리셋 시켜야 함 
    }   
    
}


const setTime = setInterval(timer,1000); 