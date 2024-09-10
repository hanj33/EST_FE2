//undefined

let a;

console.log(a); //값이 할당되지 않음
console.log(typeof a);
console.log(typeof b); //선언하지 않은 변수

//null
let isLoggedIn = true;
let currentUser = {
  name: "licat",
  level: 3,
};

isLoggedIn = false;
currentUser = null; //명시적으로 빈값
currentUser = undefined; //빈값. 의미론적으로 안 맞아서 사용 안 함

console.log(`typeof null >>`, typeof null); //출력은 잘되는 것 같지만(object로 출력) 일단 오류임
console.log("" == null); //일치연산
console.log(Object.prototype.toString.call(null)); //타입비교

//symbol
let symbol1 = Symbol();
let symbol2 = Symbol("name");
let symbol3 = Symbol("name");

console.log(symbol2 == symbol3);
console.log(symbol1);
console.log(symbol2);
console.log(symbol3);
