const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

 
function getTime(){  //시간을 얻는 함수 
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours(); 
    const seconds = date.getSeconds(); 
    clockTitle.innerText=`${hours< 10 ? `0${hours}`: hours}:${
        minute < 10? `0${minute}`: minute
    }:${seconds < 10? `0${seconds}`:seconds }`;
    //innertext는 객체 안에 텍스트를 넣기 위함 
}

function init(){  //초기화 함수
    getTime();
    setInterval(getTime, 1000); //매초마다 gettime함수 실행
}
init();