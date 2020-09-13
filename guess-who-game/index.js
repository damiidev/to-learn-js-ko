const btnHome = document.querySelector(".btn-home"),
      btnAnswer = document.querySelector(".btn-answer"),
      btnHint = document.querySelector(".btn-hint"),
      btnNext = document.querySelector(".btn-next");

 const hintWrap = document.querySelector(".hintWrap"),
       answerWrap = document.querySelector(".answerWrap");

 const inputForm = document.querySelector(".js-inputForm"),
       input = inputForm.querySelector("input");

const scoreView = document.querySelector(".score"),
      totalScoreView = document.querySelector(".totalScore"); 

const imgWrap = document.querySelector('.imgWrap'),
      img = document.createElement('img'); 

const clockContainter = document.querySelector(".clock-container"),
clockText = clockContainter.querySelector("h3");

const SCORE_LS = "SCORE_LS";
const answer = ["신세경","봉준호","기성용"];



let stage = 1;

let score = 10, //시작 점수
    realScore = 0, // 
    initCount = 0;
let currentTotalScore = 0;

// timer
let startTime = 30;

const timer = () => {
    if (startTime > 0){
        startTime -=1;
        clockText.innerText=`00:${startTime< 10? `0${startTime}` :startTime}`
    }     
    else {
        clearInterval(setTime);
        alert("시간 초과!! 다음 문제로 이동하세요!!)");
    }      
}
const setTime = setInterval(timer,1000); 

//save.. :stage 점수를 localStorage에 저장하는 함수
const saveStageScore = (score) => { //😥문제발생) 2,3 stage 값이 10에서 마이너스 된 값이 아닌 1stage 획득 점수 기준에서 마이너스 된 값으로 계산됨. > 해결 
    localStorage.setItem(stage,score);
} 

const saveTotalScore = () => {
    const currentScore = localStorage.getItem(stage);
    currentTotalScore += Number(currentScore);
    localStorage.setItem(SCORE_LS,currentTotalScore);
}

const saveCount = (count) => {  
    localStorage.setItem('hint',count);
}

const initImg= ()=> { 
    let imgNum = stage;
    imgWrap.appendChild(img);
    img.src = `img/${imgNum}.png`;
}

const paintImg = (Stage) => {
    stage +=1 ; 
    let imgNum = stage;
    imgWrap.appendChild(img);
    img.src = `img/${imgNum}.png`;
}

//paint.. : localStorage에 저장한 stage 점수 보여주는 함수
const paintScore = () => {   
    let currentScore = localStorage.getItem(stage);
    scoreView.innerText = `점수 : ${currentScore}점`;
}
//✨total 점수 보여주는 부분 업데이트 필요!!!!!!
const paintTotalScore = () => {   
    let currentTotalScore = localStorage.getItem(SCORE_LS);
    totalScoreView.innerText = `총 점수 : ${currentTotalScore}점`;
}

//paintHint : 힌트 클릭할 때 마다 순서에 맞게 힌트를 보여주는 함수
const paintHint = (count) => {
    let getCount = count;
    console.log(getCount);

    if (stage === 1){
        const hintArray = ["30대 여성입니다.", "직업은 배우입니다.", "이름 초성은 'ㅅㅅㄱ'입니다."];
        if(getCount === 1){
            hintWrap.innerText = hintArray[0];
        }
        else if(getCount === 2){
            hintWrap.innerText = hintArray[1];
        }
        else {
            hintWrap.innerText = hintArray[2];
        }   

    }
    else if (stage ===2){
        const hintArray = ["50대 남성입니다.", "직업은 영화감독입니다.", "이름 초성은 'ㅂㅈㅎ'입니다."];
        if(getCount === 1){
            hintWrap.innerText = hintArray[0];
        }
        else if(getCount === 2){
            hintWrap.innerText = hintArray[1];
        }
        else {
            hintWrap.innerText = hintArray[2];
        }
    }
    else {
        const hintArray = ["30대 남성", "직업은 축구선수입니다.", "이름 초성은 'ㄱㅅㅇ'입니다."];
        if(getCount === 1){
            hintWrap.innerText = hintArray[0];
        }
        else if(getCount === 2){
            hintWrap.innerText = hintArray[1];
        }
        else {
            hintWrap.innerText = hintArray[2];
        }

    }
   
}

// checkHint : hint 사용시 2점 감점, 0점일 경우 정답 공개 + 힌트 3개만 사용 가능, 현재 점수 2점 미만일 경우 힌드 사용 불가

 const checkHint = () => {
     //const currentScore = localStorage.getItem(stage); 
     initCount +=1;
     saveCount(initCount);
     //let count = localStorage.getItem('hint');
     
     if(initCount < 4  ) {
        score -=2; 
        saveStageScore(score); 
        paintScore();
        paintTotalScore();
        paintHint(initCount);
        alert("힌트 사용 : 2점 감점💥");   
     }
     else {
        saveCount(3);
        alert("❌❌힌트 3개 사용 완료!!❌❌");
     }
 }
const goNext =() => { 
    score = 0;
    reset();
}

const reset = () => {
    realScore = score;
    saveStageScore(realScore);
    saveTotalScore();
    paintTotalScore();
    paintImg(stage);
    paintScore();
    initCount = 0;
    count = 0;
    saveCount(0);
    score = 10;

    hintWrap.innerText = '🟢힌트🟢';
    answerWrap.innerText = '';
}
// showAnswer : 정답을 보여주는 함수
const  showAnswer = () => {
    answerWrap.innerText = `정답 : ${answer[stage-1]}`;
    score = 0;
    realScore = score; 
    saveStageScore(realScore);
    saveTotalScore();
    paintScore();
    paintTotalScore();
    alert("0점입니다 💥");   
    
}
 // checkAnswer : 정답을 체크하는 함수. 오답일 경우 마이너스 1점, 0점일 경우 정답 공개 
 const checkAnswer = (event) => {
    event.preventDefault();
    const inputValue = input.value; // 입력된 값

    if(inputValue === answer[stage-1]){
        reset();
        alert(`정답입니다!! ${realScore}점 획득!!😊`);
    }
    else{
        if(score > 1){
            score -=1;
            realScore = score; 
            saveStageScore(realScore); 
            paintScore();
            paintTotalScore();
            alert("틀렸습니다!!");
        }
        else{
            score -=1;
            realScore = score; 
            saveStageScore(realScore);
            paintScore();
            paintTotalScore();
            showAnswer();
            alert("틀렸습니다!! 0점 입니다!!💥💥");
        }
    }
}

// eventHandler
const init = () => {
    inputForm.addEventListener("submit",checkAnswer);
    btnHint.addEventListener("click",checkHint); // hint btn 
    btnAnswer.addEventListener("click", showAnswer); // answer btn 
    btnNext.addEventListener("click", goNext); // next btn 
    initImg();
    saveCount(0);
    paintTotalScore();
    localStorage.setItem(SCORE_LS,0);
    localStorage.setItem(2,10);
    localStorage.setItem(3,10);
}

init();
