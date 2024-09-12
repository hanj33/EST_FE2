// =======================================================
// ========================계절실습========================
// =======================================================

let month = 13;
let season;

if (month < 1 || month > 12) {
  console.log("정확한 달을 입력해주세요");
} else if (month <= 5 && month >= 3) {
  season = "봄";
} else if (month <= 8 && month >= 6) {
  season = "여름";
} else if (month <= 11 && month >= 9) {
  season = "가을";
} else {
  season = "겨울";
}

if (month >= 1 && month <= 12) {
  console.log(`지금 계절은 ${season}입니다.`);
}

//
// =======================================================
// ========================계절실습-switch로 작성하기========================
// =======================================================
//

console.log(`================================`);

// let month2 = 2;
let today = new Date();
let month2 = today.getMonth() + 1; // today.getMonth()는 0부터 11까지

if (month2 < 1 || month2 > 12) {
  console.log("올바른 값을 입력해주세요.");
} else {
  switch (month2) {
    case 1:
    case 2:
    case 12:
      console.log(`지금 계절은 겨울입니다.`);
      break;

    case 3:
    case 4:
    case 5:
      console.log(`지금 계절은 봄입니다.`);
      break;

    case 6:
    case 7:
    case 8:
      console.log(`지금 계절은 여름입니다.`);
      break;

    default:
      console.log(`지금 계절은 가을입니다.`);
  }
}

//
// =======================================================
// ========================반복문(for) 사용해서 1부터 100까지의 숫자 중 짝수합 구하기========================
// =======================================================
//
console.log(`================================`);

let result = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}

console.log(result);

//
// =======================================================
// ========================주사위 값 출력하기========================
// =======================================================
//
console.log(`================================`);
console.log(`두 개의 주사위를 던져 눈의 합이 8인 모든 경우를 출력합니다`);
console.log(`================================`);

// let x = 1;
// let y = 1;

for (let x = 1; x <= 6; x++) {
  for (let y = 1; y <= 6; y++) {
    if (x + y === 8) {
      console.log(`[${x}, ${y}]`);
    }
  }
}

//
// =======================================================
// =======================================================
// =======================================================
//

// let input;

// do {
//   input = window.prompt("숫자를 입력하세요.");
// } while (isNaN(input));

// console.log(`입력한 숫자는 ${input}입니다.`);

//
// =======================================================
// ========================입력받기========================
// =======================================================
//
console.log(`================================`);
console.log(
  `사용자가 입력한 값이 '종료'일 때까지 \n입력 받고, '종료'가 들어오면 \n지금까지 받은 모든 값을 출력합니다`
);
console.log(`================================`);

let comment;
const logs = []; //입력 받은 값들의 목록

// do {
//   comment = window.prompt(
//     "아무 말이나 입력해보세요 (종료하고 싶을 땐 '종료'를 입력하세요)"
//   );
//   logs.push(comment);
// } while (comment !== "종료"); // 어떨 때 다시 반복할까요? >> 입력값이 종료가 아니면 다시 반복하세요

console.log(`지금까지 입력한 값`);
console.log(logs);