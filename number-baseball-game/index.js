const form = document.querySelector(".js-inputForm"),
 input = form.querySelector("input"),
 inputBtn = document.querySelector(".js-btn"),
 LS_Input ="currentInput";

form.addEventListener("submit",eventHandler);
let inputValue =[]; // 

const randomNum = makeRandom(100,999), //100~999까지 랜덤 숫자 생성
 randomNumStr = randomNum.toString(), // 랜덤 숫자를 문자열로 변경
 randomNumArray = randomNumStr.split(""); // 문자열인 랜덤 숫자를 array로 변경

 console.log(randomNumArray);

function checkInput(input,random){ //ball, strike 확인하는 기능
    const inputArray =input,
    randomArray = random;

    let ballCount = 0,
     strikeCount = 0,
     outCount = 0,
     ballResult ="",
     strikeResult ="",
     outResult ="";

    for(i=0;i<=2;i++){
            if(inputArray[i] === randomArray[i]){
                strikeCount +=1;
                strikeResult = `${strikeCount}strike`;
            }
            else if(inputArray.includes(randomArray[i])){
                ballCount +=1;
                ballResult = `${ballCount}ball`;
            }
            else{
                outCount +=1;
                outResult = `${outCount}out`;
            }
        }
        return(strikeResult,ballResult,outResult) //strike, ball, out 개수가 담긴 문자열 리턴
    }

function paintInput(){  //입력한 수, ball strike 개수를 보여주는 기능 
    const currentInput =localStorage.getItem("currentInput");
    console.log(currentInput);
}

function saveInput(text){ // 입력한 수를 lS 에 저장하는 함수
    localStorage.setItem(LS_Input,text);
}

function eventHandler(event){ //submit시 실행되는 함수 
    event.preventDefault(); 
    const inputNum = input.value;
    inputNumArray = inputNum.split("");  
    if (inputNumArray.length !== 3){  //3자리인지 판별 
        alert("3자리 숫자를 입력해주세요.");
    }
    else{
        saveInput(inputNum);
        checkInput(inputNumArray,randomNumArray);
        paintInput();
    }   
}

 function makeRandom(min, max){ //100~999 까지 숫자를 반환하는 함수 
     const result = Math.floor(Math.random()*(max-min+1)) + min;
     return result;
 }


