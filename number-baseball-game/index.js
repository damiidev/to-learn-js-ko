const form = document.querySelector(".js-inputForm"),
 input = form.querySelector("input"),
 inputBtn = document.querySelector(".js-btn"),
 LS_Input ="currentInput";

form.addEventListener("submit",eventHandler);
let inputValue =[]; // 

const randomNum = makeRandom(100,999), //100~999까지 랜덤 숫자 
 randomNumStr = randomNum.toString(),
 randomNumArray = randomNumStr.split(""); //100~999까지 랜덤 숫자 각 숫자를 array에 삽입함. Ball,Strike 체크용

 console.log(randomNumArray);

function checkInput(array){ //ball, strike 확인하는 기능
    if(array[0] !== randomNumArray[0] || array[1] !== randomNumArray[1] || array[2] !== randomNumArray[2]){
        alert("out");  
    }
    else{
        alert("no");
    }
}
function paintInput(){  //입력한 수, ball strike 개수를 보여주는 기능 
    const currentInput =localStorage.getItem("currentInput");
    console.log(currentInput);
}

function saveInput(text){ // 입력한 수를 lS 에 저장하는 기능 
    localStorage.setItem(LS_Input,text);
}
function eventHandler(event){ 
    event.preventDefault(); 
    const inputNum = input.value;
    inputNumArray = inputNum.split("");  
    if (inputNumArray.length !== 3){  //3자리인지 판별 
        alert("3자리 숫자를 입력해주세요.");
    }
    else{
        saveInput(inputNum);
        checkInput(inputNumArray);
        paintInput();
    }   
}
 function makeRandom(min, max){ //100~999 까지 숫자를 반환하는 함수 
     const result = Math.floor(Math.random()*(max-min+1)) + min;
     return result;
 }


