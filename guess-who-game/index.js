const btnHome = document.querySelector(".btn-home"),
 btnAnswer = document.querySelector(".btn-answer"),
 btnHint = document.querySelector(".btn-hint"),
 hintWrap = document.querySelector("hintWrap"),
 inputForm = document.querySelector(".js-inputForm"),
 input = inputForm.querySelector("input");
 

const scoreView = document.querySelector(".score");
const totalScoreView = document.querySelector(".totalScore");

const STAGE_LS = "1",
SCORE_LS = "MY SCORE";

//save.. :stage 점수를 localStorage에 저장
const saveStageScore = (score) => {
    localStorage.setItem(`Stage ${STAGE_LS}`,score);
} 
const saveTotalScore = (score) => {
   localStorage.setItem(SCORE_LS,score);
}

//paint.. : localStorage에 저장한 stage 점수 보여줌
const paintScore = () => {   
    const currentScore = localStorage.getItem(`Stage ${STAGE_LS}`);
    scoreView.innerText = `점수 : ${currentScore}점`;
}
const paintTotalScore = () => {   
    const currentTotalScore = localStorage.getItem(SCORE_LS);
    totalScoreView.innerText = `총 점수 : ${currentTotalScore}`;
}

// calTotalScore : LS에 저장된 totalscore을 가져와 새로운 totalscore을 만듦(보완필요)
let currentTotalScore = 0;
const calTotalScore = () => {
    const currentScore = localStorage.getItem(`Stage ${STAGE_LS}`);
    currentTotalScore += Number(currnetScore);
    saveTotalScore(currentTotalScore);
} 

// checkHint : hint 사용시 2점 감점
 let score = 10,
  totalScore = 0;

 const checkHint = (event) => {
    alert("힌트 사용 : 2점 감점💥");
    score -=2;
    totalScore = score; 
    saveStageScore(totalScore);
    paintScore();
 }

 // checkAnswer : 오답일 경우 마이너스 1점
 const checkAnswer = (event) => {
    event.preventDefault();
    const inputValue = input.value; // 입력된 값
    
    if(inputValue === "아이유"){
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        alert(`정답입니다!! ${totalScore}점 획득!!😊`);
    }
    else{
        score -=1;
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        alert("틀렸습니다!!");
    }
}

// eventHandler
inputForm.addEventListener("submit",checkAnswer);
btnHint.addEventListener("click",checkHint); // hint btn 
