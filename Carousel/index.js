const btn = document.querySelector("button");
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

const img= document.querySelector("#img");

console.log(img.src);
btn.addEventListener("click",loadImg());

function loadImg(){
    if(img.src === "image/1.jpg"){
        document.querySelector("#img").src ="image/2.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/2.jpg"){
        document.querySelector("#img").src ="image/3.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/3.jpg"){
        document.querySelector("#img").src ="image/4.jpg";
    }
    else if(img.src === "image/4.jpg"){
        document.querySelector("#img").src ="image/5.jpg";
    }
    else if(img.src === "image/5.jpg"){
        document.querySelector("#img").src ="image/1.jpg";
    }
    else{
        console.log('실패');
    }
}
