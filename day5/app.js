// const h1titleElement = document.getElementById("title"); // id 값을 기준으로 요소 1개만 가져옴
// const childElements = document.getElementsByClassName("child"); // class 이름을 기준으로 모든 요소 가져옴
// const radioElements = document.getElementsByName("gender"); // name을 기준으로 모든 요소 가져옴
// const divELements = document.getElementsByTagName("div"); // tag를 기준으로 모든 요소 가져옴

// const divElement = document.querySelector("div"); // css 선택자 문법을 기준으로 부합하는 가장 첫번째 요소 가져옴
// const allDivElements = document.querySelectorAll("div"); // css 선택자 문법을 기준으로 부합하는 모든 요소 가져옴

//const h1titleElement = document.querySelector("h1");

// h1titleElement.style.color = "red";

//const childElement = document.querySelector(".child");

// className -> 단순 문자열이므로 사용을 지양하자~ (부작용 발생 가능)

// classList.add("className"); -> 전달받은 문자열 class 목록에 추가
// classList.remove("className"); -> class 목록에 존재한다면 제거. 없는 요소를 전달해도 문제X
// classList.toggle("className"); -> 만약 class 목록에 문자열이 존재하면 제거, 없으면 추가
// classList.replace("className1", "className2"); -> className1을 className2로 대체

//childElement.classList.replace("blue", "red");
/*
const clickHandler1 = () => console.log("클릭 핸들러 1");
const clickHandler2 = () => console.log("클릭 핸들러 2");

// 가장 마지막에 호출된 요소만 작동
//h1titleElement.onclick = clickHandler1; // 작동X
//h1titleElement.onclick = clickHandler2; // 작동O

// 모든 요소가 잘 작동 (호출된 순서대로~)
h1titleElement.addEventListener("click", clickHandler1); //작동O
h1titleElement.addEventListener("click", clickHandler2); //작동O

h1titleElement.removeEventListener("click", clickHandler1); // clickHandler1 작동X하게 했음!



// 이벤트와 관련된 모든 정보 -> 이벤트 핸들러 함수에게 넘겨줌!!!!!!
h1titleElement.addEventListener("click", (event) => {
  console.log(event.target);
});

*/

const formElement = document.querySelector("form");

const h1Element = document.querySelector("h1");
const inputElement = document.querySelector("input");
const btnElement = document.querySelector("button");

const clickHandler = (event) => {
  event.preventDefault(); // 제출이 된 순간 새로고침하는 부분을 제거!
  const userInput = inputElement.value.trim(); // String.trim() : 문자열 내 앞뒤 공백 제거
  if (userInput === "") {
    h1Element.innerHTML = "Default Title";
  } else {
    h1Element.innerHTML = userInput;
  }
  inputElement.value = "";
};

// 버튼이 클릭됬을 때! input요소의 값을 받아오려고 함
//btnElement.addEventListener("click", clickHandler);

// 제출이 된 순간! 처리
formElement.addEventListener("submit", clickHandler);
