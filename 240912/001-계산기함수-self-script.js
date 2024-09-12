// 사칙연산

function plus(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

function minus(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

function multi(a, b) {
  console.log(`${a} * ${b} = ${a * b}`);
  return a * b;
}

function divi(a, b) {
  console.log(`${a} / ${b} = ${a / b}`);
  return a / b;
}

console.log(plus(3, 3));
console.log(minus(6, 3));
console.log(multi(3, 2));
console.log(divi(6, 2));

// ========================================
// ========================================
// ========================================

// 계산기

console.log("===============================");

let x;
let y;
let input;

input = window.prompt("연산자를 입력하세요(+, -, *, /)");
x = window.prompt("숫자1 입력하기");
x = Number(x);
y = window.prompt("숫자2 입력하기");
y = Number(y);

if (input === "+") {
  console.log(plus(x, y));
} else if (input === "-") {
  console.log(minus(x, y));
} else if (input === "*") {
  console.log(multi(x, y));
} else {
  console.log(divi(x, y));
}
