// 컴포넌트

import ColorText from "./Components/ColorText";
import Hello from "./Components/Hello";
import Time from "./Components/Time";

// function Resume(props) {
//   return (
//     <>
//       <h1>{props.name} 자기소개서</h1>
//       <h1>{props.hello}</h1>
//       <h2>취미: {props.hobby}</h2>
//       <h2>좋아하는 음식: {props.food}</h2>
//       <h2>
//         좋아하는 색: <span style={{ color: props.color }}>{props.color}</span>
//       </h2>
//     </>
//   );
// }

function Resume({ hello, name, hobby, food, color }) {
  return (
    <>
      <h1>{name} 자기소개서</h1>
      <h1>{hello}</h1>
      <h2>취미: {hobby}</h2>
      <h2>좋아하는 음식: {food}</h2>
      <h2>
        좋아하는 색: <span style={{ color: color }}>{color}</span>
      </h2>
    </>
  );
}

function App3() {
  return (
    <div>
      <Hello name="개리" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="yellow" />
    </div>
  );
}

export default App3;
