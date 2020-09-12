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

const SCORE_LS = "MY SCORE";
const answer = ["신세경","봉준호","기성용"];

let stage = 1;

let score = 10, //시작 점수
    totalScore = 0,
    initCount = 0;

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

//save.. :stage 점수를 localStorage에 저장하는 함수
const saveStageScore = (score) => { //😥문제발생) 2,3 stage 값이 10에서 마이너스 된 값이 아닌 1stage 획득 점수 기준에서 마이너스 된 값으로 계산됨.
    localStorage.setItem(stage,score);
} 

const saveTotalScore = (score) => {
   localStorage.setItem(SCORE_LS,score);
}

const saveCount = (count) => {  
    localStorage.setItem('hint',count);
}
// calTotalScore : LS에 저장된 totalscore을 가져와 새로운 totalscore을 만듦
let currentTotalScore = 0;
const calTotalScore = () => {
    const currentScore = localStorage.getItem(stage);
    currentTotalScore += Number(currentScore);
    saveTotalScore(currentTotalScore);
} 

//paint.. : localStorage에 저장한 stage 점수 보여주는 함수
const paintScore = () => {   
    const currentScore = localStorage.getItem(stage);
    scoreView.innerText = `점수 : ${currentScore}점`;
}
//✨total 점수 보여주는 부분 업데이트 필요!!!!!!
const paintTotalScore = () => {   
    const currentTotalScore = localStorage.getItem(SCORE_LS);
    totalScoreView.innerText = `총 점수 : ${currentTotalScore}`;
}
//paintAnswer : 정답을 보여주는 함수
const paintAnswer = () => {
    answerWrap.innerText = `정답 : ${answer[stage-1]}`;
    score = 0;
    totalScore = score; 
    saveStageScore(totalScore);
    calTotalScore();
    paintScore();
    alert("0점입니다 탈락💥");   
    
}
//paintHint : 힌트 클릭할 때 마다 순서에 맞게 힌트를 보여주는 함수
const paintHint = (count) => {

    if (stage === 1){
        const hintArray = ["무서운 사람", "직업은 배우입니다.", "이름 초성은 'ㅅㅅㄱ'입니다."];
        if(count === 1){
            hintWrap.innerText = hintArray[0];
        }
        else if(count === 2){
            hintWrap.innerText = hintArray[1];
        }
        else {
            hintWrap.innerText = hintArray[2];
        }   

    }
    else if (stage ===2){
        const hintArray = ["오스카", "직업은 영화감독입니다.", "이름 초성은 'ㅂㅈㅎ'입니다."];
        if(count === 1){
            hintWrap.innerText = hintArray[0];
        }
        else if(count === 2){
            hintWrap.innerText = hintArray[1];
        }
        else {
            hintWrap.innerText = hintArray[2];
        }
    }
    else {
        const hintArray = ["식빵", "직업은 축구선수입니다.", "이름 초성은 'ㄱㅅㅇ'입니다."];
        if(count === 1){
            hintWrap.innerText = hintArray[0];
        }
        else if(count === 2){
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
     let count = localStorage.getItem('hint');
     
     if(count < 3  ) {
        score -=2;
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        paintHint(count);
        alert("힌트 사용 : 2점 감점💥");   
     }
     else {
        saveCount(3);
        alert("❌❌힌트 3개 사용 완료!!❌❌");
     }
 }

 // checkAnswer : 오답일 경우 마이너스 1점, 0점일 경우 정답 공개 
 const checkAnswer = (event) => {
    event.preventDefault();
    const inputValue = input.value; // 입력된 값

    if(inputValue === answer[stage-1]){
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        calTotalScore();
        alert(`정답입니다!! ${totalScore}점 획득!!😊`);
        paintImg(stage);
        initCount = 0;
        count = 0;
        saveCount(0);
    }
    else{
        if(score > 1){
            score -=1;
            totalScore = score; 
            saveStageScore(totalScore);
            paintScore();
            alert("틀렸습니다!!");
        }
        else{
            score -=1;
            totalScore = score; 
            saveStageScore(totalScore);
            paintScore();
            paintAnswer();
            alert("틀렸습니다!! 0점 입니다!!💥💥");
        }
    }
}

// eventHandler
const init = () => {
    inputForm.addEventListener("submit",checkAnswer);
    btnHint.addEventListener("click",checkHint); // hint btn 
    btnAnswer.addEventListener("click",paintAnswer); // answer btn \
    initImg();
    paintTotalScore();
    saveCount(0);
    saveTotalScore(0);
}

init();
