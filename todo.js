const toDoForm = document.querySelector(".js-toDoForm"),  //1번으로 입력칸 만들고 
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"); //2번으로 리스트보여주는 걸 만듦 

const TODOS_LS = 'toDos'; 


let toDos =[]; //할일이 array에 들어가게, 할일을 여러개가 모인 목록으로 저장해야됨

function deleteToDo(event){
  //어떤 버튼이 지워지는 지 알아야됨 btn의 father은 id값이 있음 target 개념 설명 
//console dir로 알아냄 parent node
  const btn = event.target; //event가 시작된 DOM 요소
  const li = btn.parentNode;
  toDoList.removeChild(li); //li요소 다 remove
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);  //li가 string이라서 parse로 숫자로 바꿔줌
  }); //filter는 array의 모든 아이템을 통해 함수 실행하고 true인 아이템만 가지고 새로운 arrary만듦
  //filterFn이 체그가된 아이템들의 arrary 줌
   toDos = cleanToDos ; //toDos를 const->let으로 바꿔줌 
   saveToDos();
}


function saveToDos(){ //toDos를 가져와서 localstorage에 저장하는 일을 함 
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}
 
function paintToDo(text) {   //요소를 만들어주는 함수 
  //handlesubmit 함수 안에서 불러와지는 paintToDo함수를 만들어줌
  const li = document.createElement("li");  //비어있는 li 태그를 생성해줌
  const delBtn = document.createElement("button"); // del 버튼 생성해줌 
  const span = document.createElement("span");//span 태그를 생성해줌
  const newId = toDos.length + 1;
  delBtn.innerText = "X";  //del 버튼 값은 x
  delBtn.addEventListener("click", deleteToDo);//delbtn을 클릭하면 deleteToDo함수 호출
  span.innerText = text; //여기서 text는 submit함수에서 온 값 
  li.appendChild(span);
  li.appendChild(delBtn); //li안에 delbtn넣어줌 
  li.id = newId; //li 생성될 때 마다 id부여
  toDoList.appendChild(li); //li를 ui에다 append : 즉 엔터치면 ul밑에 li,span,delbtn 다 불러옴
  
  const toDoObj = { //loaclstorage에도 toDo를 저장해둬야되기 때문에 작성
      text : text, //paintToDo함수의 text 값
      id : newId //array 순서가 0부터 시작하니까 +1해서 인덱싱
  }; 
  toDos.push(toDoObj); //push를 써서 arrary안에 element하나를 넣어줌, toDos안에 toDoObj를 넣음
  saveToDos(); //push 전에 호출하면 saveToDos를 불러도 저장할게 없음 toDos가 empty니까
//자바스크립트는 localstorage에 있는 모든 데이터를 string으로 저장하려하기 때문에 ,object가 string이 되도록 만들어야함
//이때 Json.stringify를 사용해서 자바스크립트 object를 string으로 바꿔줌
//json = javascript Object Notation

}

function handleSubmit(event) {  //밑에 쓰이는 handlesubmit 함수 적어줌
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";  //todo 입력후에 reset시켜줌
}


function loadToDos() {   //load를 로컬스토리지에서함 
  const loadedToDos = localStorage.getItem(TODOS_LS); //toDos를 가져옴
  if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);  //가져온 toDos값을 parsing해서 object로 만듦
      parsedToDos.forEach(function(toDo) { //arrary안 각 값에 paintToDo라는 함수 실행
        paintToDo(toDo.text);
      });
      //toDos의 각 요소에 모두 함수 실행
      //forEach는 함수를 실행하는데 array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 줌
      //함수를 호출하는게 아니라 바로 만듦 
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit); 
}

init();