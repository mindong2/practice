const title = document.getElementById("title");
/* document.querySelector("#title")과 같다.
class라면 .title .. querySelector를 기억하자.*/ 
/*
title.innerHTML = "HI! from JS"
title.style.color = "black";
document.title='i own you now'
console.dir(document)
*/

// target.addEventListner(type, listenr); <- Event구문

/* function handResize(){
    console.log("i have been resized")
}
window.addEventListener("resize",handResize);*/

//window에서 브라우저 사이즈가 resize될 때 반응. ()을 안붙힐시
//()가 붙으면 바로 호출.

/* click 할 시 글자 색깔을 blue로 바꾼다. 쓰임 활용 기억하자
function handClick() {
    title.style.color = "blue";
}
title.addEventListener("click", handClick);
*/

/*
if (10 === 5) {
    console.log("hi!");
} 
else if("10" === "10") {
    console.log("lalala")
} 
else{
    console.log("ho!");
}

if( 20 > 5 && "dongmin" === "dongmin") {
    console.log("yes!")
}
else{
    console.log("no!")
} // ||도 있다. 
*/
/*
const BASE_COLOR ="rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d"

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init() {
title.style.color = BASE_COLOR;
title.addEventListener("click",handleClick)
}

init();
-> HTML은 HTML파일 CSS는 CSS파일 JS는 로직처리로 하는걸 선호.
*/

const CLICKED_CLASS = "clicked";
function handleClick(){
  /*
    const hasClass= title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }
    else{
        title.classList.add(CLICKED_CLASS);
        
    } 밑의 코드와 위의 코드의 결과값은 같다.*/

    title.classList.toggle(CLICKED_CLASS);
     // 이미 정의된 HTML의 클래스를 사라지지 않게하기위해.
}

function init(){
    title.addEventListener("click",handleClick);
}
init();