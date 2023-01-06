// const h1titleElement = document.getElementById("title"); // id 값을 기준으로 요소 1개만 가져옴
// const childElements = document.getElementsByClassName("child"); // class 이름을 기준으로 모든 요소 가져옴
// const radioElements = document.getElementsByName("gender"); // name을 기준으로 모든 요소 가져옴
// const divELements = document.getElementsByTagName("div"); // tag를 기준으로 모든 요소 가져옴

// const divElement = document.querySelector("div"); // css 선택자 문법을 기준으로 부합하는 가장 첫번째 요소 가져옴
// const allDivElements = document.querySelectorAll("div"); // css 선택자 문법을 기준으로 부합하는 모든 요소 가져옴

const h1titleElement = document.querySelector("h1");

// h1titleElement.style.color = "red";

const childElement = document.querySelector(".child");

// className -> 단순 문자열이므로 사용을 지양하자~ (부작용 발생 가능)

// classList.add("className"); -> 전달받은 문자열 class 목록에 추가
// classList.remove("className"); -> class 목록에 존재한다면 제거. 없는 요소를 전달해도 문제X
// classList.toggle("className"); -> 만약 class 목록에 문자열이 존재하면 제거, 없으면 추가
// classList.replace("className1", "className2"); -> className1을 className2로 대체

childElement.classList.replace("blue", "red");
