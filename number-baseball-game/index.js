const form = document.querySelector(".js-inputForm"),
 input = form.querySelector("input"),
 inputBtn = document.querySelector(".js-btn");
 inputBtn.addEventListener("click",eventHandler);
let inputValue =[]; // 

const randomNum = makeRandom(100,999), //100~999까지 랜덤 숫자 
 randomNumStr = randomNum.toString(),
 randomNumArray = randomNumStr.split(""); //100~999까지 랜덤 숫자 각 숫자를 array에 삽입함. Ball,Strike 체크용
console.log(randomNumArray);

function paintInput(text){
    const li = document.createElement("li");
    
}

function createInputArray(input){
    const inputNumStr = input.toString(),
    inputNumArray = inputNumStr.split("");
    console.log(inputNumArray);

}

function eventHandler(event){
    event.preventDefault(); 
    const inputNum = input.value;
    createInputArray(inputNum);  
    paintInput(inputNum);

}
 function makeRandom(min, max){ //100~999 까지 숫자를 반환하는 함수 
     const result = Math.floor(Math.random()*(max-min+1)) + min;
     return result;
 }


