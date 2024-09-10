const user = {
  name: "이름",
  age: 30,
};

user.age = 20;
console.log(user);
//const로 선언했지만 객체타입은 값 변경 가능

//

//배열
const arr = [1, 2, 3, 4];
console.log(arr);

const arr2 = [1, 2, 3, "가나다", [1, 2, 3]]; //문자도 넣을 수 있고 배열 안에 배열 넣는 것도 가능
console.log(arr2);

const arr3 = Array(1, 2, 3);
console.log(arr3);
const arr4 = Array(1); //이거 뭐랬지? 길이만 가져온다는데
console.log(arr4);

console.log("======요소접근======");
//const arr = [1, 2, 3, 4];
console.log(arr[2]); // 0, 1, 2번 순서니까 3 출력
console.log(arr[5]); //요소 벗어나는 거니까 비어있는 값. undefined 출력

// 문자에서는 길이 변경 안 됐는데(변경해도 무시됨)
// 배열에서는 길이 변경 가능(알아서 잘림)
// 길이 변경하면서 초과된 값 넣어도 빈값으로 채워넣음

console.log("====== 다차원 배열 ======");
const arr5 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
]; //2차원 배열 == 행렬

//arr5 배열에서 6을 출력하고 싶어
console.log(arr5[2][1]); //0, 1, 2번째에서 0, 1번째

const arr6 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
]; //3차원 배열

console.log(arr6[0][1][1]);
