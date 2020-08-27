const btnHome = document.querySelector(".btn-home"),
 btnAnswer = document.querySelector(".btn-answer"),
 btnHint = document.querySelector(".btn-hint"),
 inputForm = document.querySelector(".js-inputForm"),
 input = inputForm.querySelector("input");

const scoreView = document.querySelector(".score");
const totalScoreView = document.querySelector(".totalScore");

const stage = "1"; 

//localStorage에 저장한 stage 점수 보여줌
const paintScore = () => {   
    const currnetScore = localStorage.getItem(`Stage ${stage}`);
    scoreView.innerText = `점수 : ${currnetScore}점`;
}

//stage 점수를 localStorage에 저장
 const saveScore = (score) => {
     localStorage.setItem(`Stage ${stage}`,score);
 } 
 
 // 정답 체크 
 let score = 10;
 const checkAnswer = (event) => {
    event.preventDefault();
    const inputValue = input.value;
    
    if(inputValue === "아이유"){
        const totalScore = score; 
        saveScore(totalScore);
        alert(`정답입니다!! ${totalScore}점 획득!!😊`);
        paintScore();
    }
    else{
        score -=1;
        alert("틀렸습니다!!");
    }
    
}

inputForm.addEventListener("submit",checkAnswer);
