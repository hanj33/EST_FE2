import logo from "./logo.svg";
import "./App.css";

// 10월 24일 실습 다함께
function App2() {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <article>
      <dl>
        <dt>년: </dt>
        <dd>{year}</dd>
        <dt>월/일: </dt>
        <dd>
          {month + 1}/{date}
        </dd>
        <dt>시간: </dt>
        <dd>
          {hour}시 {min}분 {sec}초
        </dd>
      </dl>
    </article>
  );
}

export default App;
