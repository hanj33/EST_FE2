let x = 20;

x += 10; // x = x + 10;
console.log(x);

x -= 10; // x = x - 10;
console.log(x);

x *= 10; // x = x * 10;
console.log(x);

x /= 10; // x = x / 10;
console.log(x);

x %= 3; // x = x % 3;
console.log(x);

x **= 2; // x = x ** 2;
console.log(x);

//

let y = 10;

console.log(x == y);
console.log(x == 30);

// 자동형변환 일어난다고 했음,, 문자열로 숫자 넣어도 자동으로 숫자로 바꿔서 비교함
console.log(x == "4");
// 불리언도 1은 트루고 0은 false라서 그걸로 비교해도 둘이 같다고 나옴... 1은 true 0은 false
console.log(1 == true);
console.log(0 == false);
