// const userAge = Number(prompt("당신의 나이는?")); // 24살

// console.log(userAge);

isNaN(); // -> 자동으로 들어오는 데이터를 형변환(Number) 해버려서 결과가 예측 어렵
Number.isNaN(); // -> 데이터 건드리지 않고 isNaN, NaN 여부를 체크해줌! <- 얘를 애용하자!

/** 조건에 맞는 요소만 남겨주는 & 연산을 처리하는 함수
 * 1. 1000원이 초과되는 값만 출력
 * 2. 문자열 뒤에 "원" 글자를 붙여야줘야 함
 *
 * 반환 값 : 조건에 맞는 값만 존재하는 **새로운** 배열
 */

const price = ["2000", "1000", "100000", "3000", "5000", "4000"];

function getWonPrice1(cuteCat) {
  const newArr = [];
  for (let i = 0; i < cuteCat.length; i++) {
    if (Number(cuteCat[i]) > 1000) {
      //Number('1000') vs 1000
      newArr.push(cuteCat[i] + "원");
      //   newArr[newArr.length] = cuteCat[i] + "원";
    }
  }

  return newArr;
}

console.log(getWonPrice1(price));

const priceList2 = ["2000", "1000", "100000", "3000", "5000", "4000"];

// function getWonPrice(priceList) {
//   const over1000List = priceList.filter((price) => Number(price) > 1000);
//   const sortedList = over1000List.sort((a, b) => a - b);
//   const result = sortedList.map((data) => data + "원");
//   return result;
// }

function getWonPrice(priceList) {
  return priceList
    .filter((price) => Number(price) > 1000)
    .sort((a, b) => a - b)
    .map((data) => data + "원");
}

console.log(getWonPrice(priceList2));
