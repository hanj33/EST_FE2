//비교연산
let x = 10;
let y = 20;

console.log(x > y);
console.log(x == 10);
console.log(x === 10);
console.log(x == "10");
console.log(x === "10");

//논리연산
// 1. 논리곱(&&)

console.log("======논리곱======");
//둘 다 true일 때만 true
console.log(`true&&true >> ${true && true}`);
console.log(`true&&false >> ${true && false}`);
console.log(`false && true >> ${false && true}`);
console.log(`false && false >> ${false && false}`);

let isRaining = true;
let hasUmbrella = false;

if (isRaining && hasUmbrella) {
  console.log("외출하기");
} else {
  console.log("집에 있기");
}

// 2. 논리합(||)
console.log("======논리합======");
//하나라도 true면 true
console.log(`true||true >> ${true || true}`);
console.log(`true||false >> ${true || false}`);
console.log(`false || true >> ${false || true}`);
console.log(`false || false >> ${false || false}`);

isRaining = false;
let isSnowing = false;

if (isRaining || isSnowing) {
  console.log("집에 있기");
} else {
  console.log("외출하기");
}

// 3. 논리부정(!)
console.log("======논리부정======");
//하나라도 true면 true
console.log(`!true >> ${!true}`);
console.log(`!false >> ${!false}`);
console.log(`!!true >> ${!!true}`);
console.log(`!!false >> ${!!false}`);
console.log(`!!!false >> ${!!!false}`);

console.log(!isRaining);
console.log(!isSnowing);
console.log(!!isSnowing);
