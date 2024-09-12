// 전날 수업 점검

// let input;

// input = window.prompt("나이를 입력하세요.");

// if (input >= 20) {
//   console.log(`${input}세는 성인입니다.`);
// } else {
//   console.log(`${input}세는 성인이 아닙니다.`);
// }

let num = 4;
// num = window.prompt("숫자를 입력하세요.");
num = num % 2 === 0 ? "짝수" : "홀수";
console.log(num);

for (i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
