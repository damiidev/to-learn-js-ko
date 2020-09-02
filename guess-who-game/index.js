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

//힌트 클릭할 때 마다 다른 힌트 나오도록 작성중(배열에 힌트 넣어서 보여주기?)

const showHint = () => {
    const hintArray = ["직업 : 가수", "이름 : OOO", "초성 : ㅇㅇㅇ"];
    countHint();
}

// checkHint : hint 사용시 2점 감점, 0점일 경우 정답 공개 + 힌트 3개만 사용 가능
 let score = 10,
     totalScore = 0,
     count = 0;

 const checkHint = () => {
     count += 1;
     if(count < 3 ) {
        score -=2;
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        alert("힌트 사용 : 2점 감점💥");
     }
     else if(count === 3) {
        score -=2;
        totalScore = score; 
        saveStageScore(totalScore);
        paintScore();
        alert("힌트 사용 : 2점 감점💥");
     }
     else {
         alert("❌❌힌트 3개 사용 완료!!❌❌");
     }
 }

// calTotalScore : LS에 저장된 totalscore을 가져와 새로운 totalscore을 만듦
let currentTotalScore = 0;
const calTotalScore = () => {
    const currentScore = localStorage.getItem(`Stage ${STAGE_LS}`);
    currentTotalScore += Number(currentScore);
    saveTotalScore(currentTotalScore);
} 

 // checkAnswer : 오답일 경우 마이너스 1점, 0점일 경우 정답 공개 
 const checkAnswer = (event) => {
    event.preventDefault();
    const inputValue = input.value; // 입력된 값

    if(inputValue === "아이유"){
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
        }
    }
}

// eventHandler
const init = () => {
    saveTotalScore(0);
    inputForm.addEventListener("submit",checkAnswer);
    btnHint.addEventListener("click",checkHint); // hint btn 
}

init();
