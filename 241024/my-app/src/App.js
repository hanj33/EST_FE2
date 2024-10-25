import React from "react";
import "./App.css";

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function dlList() {
  const listItems = items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </React.Fragment>
    );
  });
  return <dl>{listItems}</dl>;
}

function App() {
  // #1
  //   const arr = [1, 2, 3, 4, 5];
  //   return arr.map(() => {
  //     return (
  //       <React.Fragment className="my-fragment">
  //         <h1>Hello</h1>
  //         <h2>Hello</h2>
  //         <h3>Hello</h3>
  //       </React.Fragment>
  //     );
  //   });

  // #2 실습
  return dlList();
}
export default App;
