const weather = document.querySelector(".js-weather");
const API_KEY = "14cc2c5101419274990df695bc1eace8";
const COORDS ="coords";
//js는 웹사이트로 요청보내고 응답을 통해 데이터를 얻을 수 있는데 
//가져온 데이터 refresh없이도 웹사이트에 적용시킬 수 있음

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
      .then(function(response){
          return response.json();
      })
      .then(function(json){ //json이 준비되면 
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText =`현재 ${place}의 온도는 섭씨 ${temperature}도 입니다.`;
    }); //then함수는 데이터가 우리한테 넘어 왔을 때 호출
}
//

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));     
}

function hadleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude   // longitude : logitude랑 같은 의미 
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    Console.log("can't access geo location!!");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(hadleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);

    }
}

function init(){
    loadCoords();
}

init();
