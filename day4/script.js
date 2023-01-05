// // 변수 : 데이터를 저장할 수 있는 공간
// // 값 / 값이 들어있는 공간 주소

// // 식별자 : 어떤 값을 구별해서 사용할 수 있는 이름

// let a = 10;
// // let, const, var, case, break ....

// // 값 -> 식(표현식)이 평가되어 생성된 결과 3
// // 표현식 1+2

// // 리터럴 : 사람이 이해할 수 있는 문자 / 약속된 기호를 사용해 값 생성한다.
// // 3
// // 100
// // 10.4
// // "hello"
// // true
// // false
// // null
// // undefined
// // { }
// // [1,2,3]
// // function() { }

// // 데이터 타입
// // 1. 원시 데이터 타입 : 숫자, 문자열, 불리언
// // 2. 객체 데이터 타입 : 배열, object, function, ...

// // 동적 타입 언어 vs 정적 타입 언어
// // JS            vs Java

// const name = "yeji";

// // 산술연산자 + , - , * , /, %

// console.log(null + 10); // 숫자가 등장하는 경우 숫자를 더해주는 연산
// console.log(null + "1"); // 문자열이 등장하는 경우 문자열을 연결

// console.log(0 == ""); // true
// console.log(0 === ""); // false

// // 삼항 조건 연산자 : 조건문의 실행결과에 따른 반환 값!!!!!!이 존재
// // 조건 ? 참일때 반환할값 : 거짓일 때 반환 값

// const isLogin = name !== "" ? true : false;
// console.log(isLogin);

// // if / else if / else
// let isLogined = null;
// if (name !== "") {
//   isLogined = true;
// } else {
//   isLogined = false;
// }

// const example = isLogin ? (a === 0 ? "zero" : "positive") : "negative";

// // 논리연산자 && || !
// console.log(true && true && "야호!"); // 단축 평가

// let x, y, z;
// (x = 1), (y = 2), (z = 3);

// // 연산자 우선순위
// console.log(1 + (2 && true)); // 2
// console.log(1 + 2 && true); // true

// // 제어문
// // 블록 : { }
// // {
// //   let local = "dummy";
// // }
// // console.log(local);

// // 조건문
// if (name) {
//   console.log(`${name}님 환영합니다`);
// } else {
//   console.log(`먼저 로그인을 해주세요`);
// }

// // switch문
// switch (name) {
//   case "":
//     console.log(`먼저 로그인을 해주세요`);
//     break;
//   case "yeji":
//     console.log(`${name}님 환영합니다`);
//     break;
//   default:
//     console.log("default문 실행");
// }

// // 윤년 여부 체크해서 -> 그 달의 일수(며칠)
// const year = 2023;
// let month = 1;
// let days = 0;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;
//   case 2:
//     // 윤년 계산 알고리즘
//     days = 28;
//     break;
//   default:
//     days = 30;
// }

// // 반복문
// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }
// // console.log(i);
// // let count = 4;
// // while (count < 3) {}

// // do {
// //   // 한번은 실행
// // } while (/*조건문*/ true);

// // 객체 유용한 기능!
// const firstName = "cheon";
// const lastName = "yeji";

// // const teacher = {
// //     firstName: "cheon",
// //     lastName: "yeji",
// //     getFullName: function () {
// //       return this.firstName + " " + this.lastName;
// //     },
// //   };

// const teacher = {
//   firstName,
//   lastName,
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // 객체의 키값은 여러분이 넣고 싶은 요소!
// const obj = {
//   [firstName]: "value",
// };

// 함수
// function 이름 (인자1) {
//     // 실제 실행 코드
// }

function printSum(a, b) {
  let result = a + b;
  //   console.log(result);

  return result;
}

console.log(printSum(1, 2));

// 개발자가 실수로 함수의 인자를 잘못 전달~!

function greeting(name = "유저") {
  console.log(`${name}님 환영합니다`);
}

greeting();

function printNums(a, b) {
  console.log(arguments);
}
printNums(10, 20, 30);

function test(a, b, ...rest) {
  console.log(a, b);
  console.log(rest);
}

test(1, 2, 3, 4, 5);

function printSum1(a, b) {
  return a + b;
}

const printSum2 = (a, b) => a + b;
const printSum3 = (a) => a + 1;
// 화살표 함수 vs 일반 함수
// arguments X
// this를 불러올 때 상황이 다름!

const teacher = {
  name: "yeji",
  getFullName: () => {
    // console.log(this);
    return this.name;
  },
  getFullName2: function () {
    // console.log(this);
    return this.name;
  },
};

teacher.getFullName();
console.log(teacher.getFullName2());

// 만약 로그인을 했으면 유저의 이름을 출력해주는 함수
const welcome = (isLogin) => {
  return isLogin
    ? `안녕하세요 ${teacher.getFullName2()}`
    : `로그인을 해주세요!`;
};
// alert(welcome());

function alertMessage(isLogin) {
  //isLogin ? alert("환영합니다!") : alert("로그인을 먼저 해주세요!");

  if (isLogin) {
    console.log("환영합니다!");
  } else {
    console.log("로그인을 먼저 해주세요!");
  }
}

console.log(alertMessage());

console.log(true && true && "밥먹어야지!");

function fetchData() {
  //   if (state.data) {
  //     return state.data;
  //   } else {
  //     return "Fetching...";
  //   }

  //   return state.data ? state.data : "Fetching...";
  return state.data || "Fetching...";
}

// user = {name : "value"} , isLogin : true -> return user.name
// user의 객체가 존재X or isLogin : false -> return 로그인해주세요!
function getActiveUserName(user, isLogin) {
  //   if (isLogin) {
  //     if (user) {
  //       if (user.name !== "") {
  //         return user.name;
  //       } else return "로그인해주세요!.";
  //     }
  //   }

  if (isLogin && user) return user.name || "로그인해주세요!";
}

// user = {name : "value"} , isLogin : true -> return user.name
// user의 객체가 존재X or isLogin : false -> return 로그인해주세요!
function getActiveUserName2(user, isLogin) {
  if (!isLogin) {
    return;
  }

  if (!user) {
    return;
  }

  if (!user.name) {
    //throw new Error("객체는 존재하나 이름이 없습니다!");
    return;
  }

  return `${user.name}님 환영합니다!`;
}

const user = { name: "" };
console.log(getActiveUserName2(user, true));

// 부정조건문 지양! (긍정조건을 많이 사용하자~!)
function isNumber(num) {
  return !isNaN(num) && typeof num === "number";
}

if (!isNaN(3)) {
  console.log("숫자입니다.");
}

if (isNumber(3)) {
  console.log("숫자입니다.");
}

// div 100 100
function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = height ?? 100 + "px";
  element.style.width = width ?? 100 + "px";

  return element;
}

console.log(createElement("span"));

console.log((null || undefined) ?? "div");

// js 배열 -> 객체 (Object)

const arr = [1, 2, 3];
// arr[3] = "is it work?";
// arr[{}] = [1, 2, 3];
// arr["func"] = function () {
//   return "smile~~~~~";
// };
console.log(arr);

const obj1 = { 2: "plz", 1: "js", 0: "hello", length: 5 };

console.log(obj1);
console.log(Array.from(obj1));

const confirmBtn = document.getElementsByTagName("button")[0];
const cancelBtn = document.getElementsByTagName("button")[1];
const resetBtn = document.getElementsByTagName("button")[2];

const [confirmB, cancelB, resetB] = document.getElementsByTagName("button");

const [first, second, third] = [1, 2, 3];
console.log(first);

const nums = [10, 20, 30];
nums.length = 0;

console.log(nums);

const originArr = ["123", "456", "789"];

const newArr = [...originArr]; // ['123', '456', '789']

originArr.push("newValue1");
originArr.push("newValue2");
originArr.push("newValue3");

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

const printItem = (arrItem) => {
  console.log(arrItem);
};

newArr.forEach(printItem);

/** 조건에 맞는 요소만 남겨주는 & 연산을 처리하는 함수
 * 1. 1000원이 초과되는 값만 출력
 * 2. 문자열 뒤에 "원" 글자를 붙여야줘야 함
 * 3. 데이터 기준(금액) 오름차순 정렬
 *
 * 반환 값 : 조건에 맞는 값만 존재하는 **새로운** 배열
 */

const price = ["2000", "1000", "3000", "5000", "4000"];

parseInt("2000", 10); // '2000' ->

function getWonPrice1(cuteCat) {
  const newArr = [];
  for (let i = 0; i < cuteCat.length; i++) {
    if (Number(cuteCat[i]) > 1000) {
      //Number('1000') vs 1000
      newArr.push(cuteCat[i] + "원");
    }
  }

  return newArr;
}

console.log(getWonPrice1(price));

// function getWonPrice(priceList) {
//   // filter : callbackFn (천원이 넘는가 true false)
//   // sort : callbackFn (더 큰 요소가 뒤로 가도록 오름차순)
//   // map : callbackFn (문자열 "원"을 이어붙여주기)
//   return ________;
// }

// console.log(getWonPrice(price));
