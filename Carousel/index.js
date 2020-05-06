const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const img= document.querySelector("#img");

rightBtn.addEventListener("click",rihgtImg);
leftBtn.addEventListener("click",leftImg);

function rihgtImg(){
    if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/1.jpg"){
        img.src="image/2.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/2.jpg"){
        img.src ="image/3.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/3.jpg"){
        img.src ="image/4.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/4.jpg"){
        img.src ="image/5.jpg";
    }
    else{
        img.src ="image/1.jpg";
    }
}

function leftImg(){
    if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/1.jpg"){
        img.src="image/5.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/5.jpg"){
        img.src ="image/4.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/4.jpg"){
        img.src ="image/3.jpg";
    }
    else if(img.src === "file:///D:/GitHub/to-learn-js-ko/Carousel/image/3.jpg"){
        img.src ="image/2.jpg";
    }
    else{
        img.src ="image/1.jpg";
    }
}