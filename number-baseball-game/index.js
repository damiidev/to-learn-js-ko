const form = document.querySelector(".js-inputForm"),
 input = form.querySelector("input"),
 inputBtn = document.querySelector(".js-btn"),
 count = document.querySelector("#js-count"),
 result = document.querySelector("#js-result");

form.addEventListener("submit",eventHandler);

const randomNum = makeRandom(100,999), //100~999까지 랜덤 숫자 생성
 randomNumStr = randomNum.toString(), // 랜덤 숫자를 문자열로 변경
 randomNumArray = randomNumStr.split(""); // 문자열인 랜덤 숫자를 array로 변경
 console.log(randomNumArray); //정답 숫자 console창에서 확인

 function makeRandom(min, max){ //100~999 까지 숫자를 반환하는 함수 
    const result = Math.floor(Math.random()*(max-min+1)) + min;
    return result;
}

let clicks = 0;

function countClicks(){ //도전 횟수 체크용 함수
    if(clicks > 9){  
        count.innerText=`도전 횟수 : ${clicks}/10`;
        alert('10번 초과!! 실패!!');
    }
    else{
        clicks +=1;
        count.innerText=`도전 횟수 : ${clicks}/10`;
    }
}

function checkInput(input,random){ //ball, strike, out 확인용 함수
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
            result.innerHTML= `${ballResult} ${strikeResult} ${outResult}`; 
            checkStrike();
        }
         //strike, ball, out 개수가 담긴 문자열 리턴
    }

function checkStrike(){ //3strike 축하용 함수
    if(result.innerHTML === ' 3strike '){
        alert("3strike! Congratulation!!!");
    }
}

function eventHandler(event){ //submit시 실행되는 함수 
    event.preventDefault(); //입력 숫자 유지
    const inputNum = input.value;
    inputNumArray = inputNum.split("");  
    if (inputNumArray.length !== 3){  //3자리인지 판별 
        alert("3자리 숫자를 입력해주세요.");
    }
    else{
        checkInput(inputNumArray,randomNumArray);
        countClicks();
    }   
}