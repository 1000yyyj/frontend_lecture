// js 비동기 구현
// 1. 콜백함수 -> 지옥행 열차
// 2. Promise -> ES6 표준 문법!
// 3. async & await -> ES8 (최신 문법)

// 비동기 처리 : 작업을 다른 요소가 처리하게 넘겨줌!

// Promise : 비동기 상황을 값으로 표현
// 비동기 상황 (작업 수행 여부) - 객체
// 1. 작업 중 (pending)             : 성공, 실패도 결정되지 않는 실행중
// 2. 작업 완료 & 성공 (fullfilled) : 작업 끝! 성공했다~~~ (resolve) -> then 사용
// 3. 작업 완료 & 실패  (rejected)  : 작업 끝! 실패..... (reject) -> catch 사용

const p1 = new Promise(function (resolve, reject) {
  // DB에서 데이터 불러오기 ~
  // 서버 API에서 필요 데이터 호출 ~
  setTimeout(() => {
    resolve("p1 객체 작업이 성공적으로 끝났습니다.");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 객체 작업이 성공적으로 끝났습니다."));
}, 4000);

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("실패,,,");
//   }, 1000);
// });

console.time("p1p2Test"); // 시간 측정 시작!
// Promise.all([p1, p2]).then(([result1, result2]) => {
//   console.log(result1);
//   console.log(result2);

//   console.timeEnd("p1p2Test"); // 시간 측정 끝~!
// });

// 비동기 상황을 잡아서 처리
// then(), catch(), finally()
// promise.then(()=>{}, ()=>{})
//         성공했을 때 , 실패했을 때

// new Promise((resolve, reject) => {
//   setTimeout(() => reject("비동기 처리의 결과값"), 1000);
// }).then(
//   function (resolve) {
//     alert(resolve);
//   },
//   function (reject) {
//     confirm(reject);
//   }
// );

// new Promise((resolve, reject) => {
//   setTimeout(() => reject("비동기 처리의 결과값"), 1000);
// }).catch((reject) => alert(reject));

// new Promise((resolve, reject) => {
//   setTimeout(() => reject("fail"), 1000);
// })
//   .finally(() => console.log("실행됨~!"))
//   .then(
//     (resolve) => {
//       alert(resolve);
//     },
//     (reject) => {
//       confirm(reject);
//     }
//   )
//   .catch((reject) => {
//     console.log(reject);
//   });

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    alert(result);
    return result + 1;
  })
  .then((result) => {
    alert(result);
    return result + 1;
  })
  .then((result) => {
    alert(result);
    return result + 1;
  })
  .then((result) => {
    alert(result);
    return result + 1;
  });
