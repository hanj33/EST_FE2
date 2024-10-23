import logo from "./logo.svg";
import "./App.css";

function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
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
    <div>
      <div>
        <h2 style={someStyle}>안녕, {name} 1호</h2>
        <h2>안녕, 라이캣 2호!</h2>
        <div className="newClass" />
      </div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h2 style={{ color: "red" }}>년 : {year}</h2>
        <h2>
          월/일 : {month}/{date}
        </h2>
        <h2>
          시간 : {hour}시 {min}분 {sec}초
        </h2>
      </div>
    </div>
  );
}

export default App;
