// 배열에서 짝수인 경우, 제곱해서 합 구하기
// hint. 필터, 맵, 리듀스 쓰면 될지도?

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//짝수부터 골라야 하는 거 아님?

const newArr = arr.filter(function (item, index) {
  return item % 2 == 0;
});

//제곱하기
console.log(newArr);

const newArr2 = newArr.map(function (item, index) {
  return item ** 2; // = item*item (어차피 제곱임)
});

//더하기
console.log(newArr2);

const result = newArr2.reduce((a, c) => {
  console.log(`기존값: ${a}, 더할 값: ${c} `);
  return a + c;
}, 0);
console.log(result);

// map 쓴 부분 빼버리고 reduce에서 a+c를 a+c**2 쓰는 식으로 간결하게 만드는 방법도 있음
// 결국 a초기값에 c**2제곱한값을 더하는 거니까 똑같은 값 나오는 거임
