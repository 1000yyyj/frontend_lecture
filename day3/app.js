let age = 10;
age = 11;

console.log(age);

const name = "yeji";
// name = "cheoneyeji";
console.log(name);

// const score; // 에러 남

// const vs let?
// 일단 const 쓰고! 수정이 필요하면 let으로 바꾸자~

// 원시 데이터 타입 (JS가 기본으로 제공)
console.log(typeof age);
// Number : 정수, 실수를 모두 포함하는 데이터 타입

console.log(typeof name);
// String : 따옴표로 감싼 문자나 문자열

let catName = "jibok"; // 큰따옴표
catName = "mdol"; // 작은따옴표
catName = `cute jibok`; // 백틱

catName = `cute jibok's age is ${age - 10}`;
console.log(catName);
// console.log(catName + age);

if (1 > 0) {
  console.log("참");
}

console.log(1 > 0); // true
console.log(1 < 0); // false
// Boolean : 참 / 거짓

// null : 값이 없다! 의도적으로 알려주는 것
// undefined : 값이 아직 지정되지 않았다 (개발자의 실수일 확률 높음)

// 참조 데이터 타입
// 배열
const arr = [1, 2, 3];
arr[0] = 10;
console.log(arr[0]);

// 객체
const student = {
  name: "yeji",
  age: 10,
};

console.log(student["name"]);
console.log(student.name);

// 전역변수 vs 지역변수
var global = "전역변수";
if (global === "전역변수") {
  var global = "지역변수";
  //   console.log(global);
}
// console.log(global);

// 연산자
// 산술연산자
console.log(2 / 3); // 나눗셈
console.log(2 % 3); // 나머지
console.log(2 ** 3); // 지수
console.log(2 + "살");

// 증감연산자
// ++, --
let number = 10;
number++; // number = number + 1;
console.log(number);

// 비교연산자
const num1 = 10;
const num2 = 20;

console.log(num1 > num2);
console.log(num1 <= num2);
// == vs '==='
console.log(num1 === num2);

console.log(num1 == "10");
console.log(num1 === "10");

// != , !==
console.log(num1 != num2);

// 논리연산자
// AND, OR, NOT
// &&, ||, !

console.log(true && false);
console.log(true || false);

console.log(typeof null);
console.log(typeof undefined);

console.log(null + 120);
console.log(undefined + 120);

console.log(!null === true);

console.log(!undefined);

console.log(true && true && "야호");

console.log(true && false && "집에가자~");

console.log(false || false || "집에안갈래");
