import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incre = () => {
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    // 이런 식으로 여러 개의 함수 넣으면 마지막에 쓴 것만 적용됨.. 비동기적으로? 작동된다 함
    // 순서를 어떻게 해야 할지 몰라서 다 무시하고 마지막 것만 하는 거임
    // 음,, 그치만 순서 정해서 원하는 대로 넣고 싶은데... => 그래서 쓸 수 있는 게 함수형 업데이트
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };
  const decre = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incre}>+1</button>
      <button onClick={decre}>-1</button>
    </>
  );
}

export default Counter;
