import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App"; // 입력했을 때 일치하면 홈페이지/ 아니면 로그인페이지로 돌아옴
// import App from "./App2"; // 키값 예시-설명용 교안 코드
// import App from "./App3"; // 이름 클릭하면 정보가 온오프
// import App from "./App4"; // 입력 받아서 목록에 추가
// import App from "./App5"; // 입력 받아서 목록에 추가
import App from "./App6"; // 사용자 권한에 따른 페이지 전환

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
root.render(<App />);
