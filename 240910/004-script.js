// forEach를 이용한 문제
const phoneNumbers = [
  "010-1234-5678",
  "02-987-6543",
  "031-456-7890",
  "010-8765-4321",
];
// 배열에서 전화번호 뒷자리만 출력하기

function backNumber(elem, index) {
  console.log(elem.slice(-4));
}

phoneNumbers.forEach(backNumber);

//
// -----------------------------------------------------------------------------
//

const data = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];

// const ages = data.map(item => item.age);
const ages = data.map((item) => item["age"]);
console.log(ages);
