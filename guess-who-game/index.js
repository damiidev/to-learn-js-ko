const btnHome = document.querySelector(".btn-home"),
      btnAnswer = document.querySelector(".btn-answer"),
      btnHint = document.querySelector(".btn-hint");

 const hintWrap = document.querySelector(".hintWrap"),
       answerWrap = document.querySelector(".answerWrap");

 const inputForm = document.querySelector(".js-inputForm"),
       input = inputForm.querySelector("input");

const scoreView = document.querySelector(".score"),
      totalScoreView = document.querySelector(".totalScore"); 

const STAGE_LS = "1",
      SCORE_LS = "MY SCORE",
      answer = "아이유";

//save.. :stage 점수를 localStorage에 저장하는 함수
const saveStageScore = (score) => {
    localStorage.setItem(`Stage ${STAGE_LS}`,score);
} 

const saveTotalScore = (score) => {
   localStorage.setItem(SCORE_LS,score);
}

// calTotalScore : LS에 저장된 totalscore을 가져와 새로운 totalscore을 만듦
let currentTotalScore = 0;
const calTotalScore = () => {
    const currentScore = localStorage.getItem(`Stage ${STAGE_LS}`);
    currentTotalScore += Number(currentScore);
    saveTotalScore(currentTotalScore);
} 

//paint.. : localStorage에 저장한 stage 점수 보여주는 함수
const paintScore = () => {   
    const currentScore = localStorage.getItem(`Stage ${STAGE_LS}`);
    scoreView.innerText = `점수 : ${currentScore}점`;
}
//✨total 점수 보여주는 부분 업데이트 필요!!!!!!
const paintTotalScore = () => {   
    const currentTotalScore = localStorage.getItem(SCORE_LS);
    totalScoreView.innerText = `총 점수 : ${currentTotalScore}`;
}

//paintHint : 힌트 클릭할 때 마다 순서에 맞게 힌트를 보여주는 함수(✨점수 1이하일 때 힌트 사용 불가하도록 업데이트 필요)
const paintHint = () => {
    const hintArray = ["20대 여성입니다.", "직업은 가수입니다.", "이름 초성은 'ㅇㅇㅇ'입니다."];
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

let score = 10,
totalScore = 0,
count = 0;

//paintAnswer : 정답을 보여주는 함수
const paintAnswer = () => {
    answerWrap.innerText = `정답 : ${answer}`;
    score = 0;
    totalScore = score; 
    saveStageScore(totalScore);
    calTotalScore();
    paintScore();
    alert("0점입니다 탈락💥");   
    
}
// checkHint : hint 사용시 2점 감점, 0점일 경우 정답 공개 + 힌트 3개만 사용 가능

 const checkHint = () => {
     const currentScore = localStorage.getItem(`Stage ${STAGE_LS}`); 
     count += 1;
     if(count < 3 && currentScore >1 ) {
        score -=2;
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        paintHint();
        alert("힌트 사용 : 2점 감점💥");   
     }
     else if(count === 3 && currentScore >1 ) {
        score -=2;
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        paintHint();
        alert("힌트 사용 : 2점 감점💥");  
     }
     else if(currentScore < 2){
        alert("❌❌현재 점수로는 힌트 사용이 불가합니다.❌❌");  

     }
     else {
         alert("❌❌힌트 3개 사용 완료!!❌❌");
     }
 }



 // checkAnswer : 오답일 경우 마이너스 1점, 0점일 경우 정답 공개 
 const checkAnswer = (event) => {
    event.preventDefault();
    const inputValue = input.value; // 입력된 값

    if(inputValue === answer){
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        calTotalScore();
        alert(`정답입니다!! ${totalScore}점 획득!!😊`);
        
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
            alert("틀렸습니다!! 0점 입니다!!💥💥");
            paintAnswer();
        }
    }
}

// eventHandler
const init = () => {
    saveTotalScore(0);
    inputForm.addEventListener("submit",checkAnswer);
    btnHint.addEventListener("click",checkHint); // hint btn 
    btnAnswer.addEventListener("click",paintAnswer); // answer btn 
}

init();
