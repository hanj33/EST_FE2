//화살표 함수로 변환하기

// 다음 두 함수를 화살표 함수로 변환하세요
function multiply(a, b) {
  return a * b;
}

function squareRoot(num) {
  return num ** 0.5;
}

// ====================================

const multi = (a, b) => {
  return a * b;
};
console.log(multi(2, 3));

const root = (num) => {
  return num ** 0.5;
};
console.log(root(16));
