let m = new Map();
console.log(m);

let s = new Set("가영이가 햄스터를 햄의 터인 줄 알았대"); //그러네 겹치는 문자는 다 사라지는구나
console.log(s);

console.log("===============================");

const board = ["라이캣", "라이캣", "라이캣", "빙키", "소울곰", "뮤라"];

// 1. 작성자 인원 수
let writer = new Set(board);
console.log(`작성자는 ${writer.size}명입니다.`);

// 2. 각자 몇 개의 게시글을 작성했는지? Map을 활용해봅시다

/*
let post = new Map();
post.set(board);

for (i in board) {
  let count = 1;
  if (post.has(board[i])) {
    count++;
  }
}
*/
// 감도 안 잡히는데...?
// ㄹㅇ 감도 안 잡히는데......................

// 2-1. writer 이용해보기

const mapUsingSet = new Map();
for (const name of writer) {
  console.log(name, board.filter((el) => el === name).length); // 요소에 대해서 요소의 이름이 name과 같은가?

  mapUsingSet.set(name, board.filter((el) => el === name).length);
}

console.log(mapUsingSet);

// 2-2. board 순회하기

const mapUsingIter = new Map();
// 배열 board를 순회하는 방법은 다양함
// forEach,,, for of(요소),,, for in(인덱스) 등등등 => 강사님은 for of로 쓰는데 forEach랑 for in은 다른 분들이 제출한 거 참고

for (const name of board) {
  //Map에 요소가 있으면 1 추가/ 없으면 1 넣기
  console.log(name);
  mapUsingIter.has(name)
    ? mapUsingSet.set(name, mapUsingIter.get(name) + 1)
    : mapUsingIter.set(name, 1);
}
console.log(mapUsingIter); // 엥 안 되는데 왜 이래 나중에 확인 좀
