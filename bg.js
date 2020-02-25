const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);  //appendchild에서 prepend로 바꿨더니 배경으로 적용됨
//prepend를 해야 body 최상단에 이미지가 들어감
}
function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;

}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();