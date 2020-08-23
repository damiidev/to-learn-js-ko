const btnHome = document.querySelector(".btn-home");
const btnAnswer = document.querySelector(".btn-answer");
const btnHint = document.querySelector(".btn-hint");

const createImg = document.createElement('img'); // img 태그 생성
const divImg = document.querySelector(".imgWrap");
let imgNum =1;
divImg.appendChild(createImg);
createImg.src = `img/${imgNum}.png`;

btnAnswer.addEventListener("click",nextImg);

const nextImg = () => {
    
}