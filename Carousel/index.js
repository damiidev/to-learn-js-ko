const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");  
const createImg = document.createElement('img');
const divImg = document.querySelector(".imgWrap");
let imgNum =1;
divImg.appendChild(createImg);
createImg.src = `image/${imgNum}.jpg`;

rightBtn.addEventListener("click",rightImg); 
leftBtn.addEventListener("click",leftImg);
    
function rightImg(){
    if(imgNum === 5){
        imgNum =1;
        createImg.src = `image/${imgNum}.jpg`;
    }
    else {  
        imgNum +=1;
        createImg.src = `image/${imgNum}.jpg`;
    }
}

function leftImg(){
    if(imgNum === 1 ){
        imgNum =5;
        createImg.src = `image/${imgNum}.jpg`;
    }
    else {
        imgNum -=1;
        createImg.src = `image/${imgNum}.jpg`;
    }
}
