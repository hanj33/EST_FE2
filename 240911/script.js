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
