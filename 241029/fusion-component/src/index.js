import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App2";
// import App from "./App3";
// import App from "./test";
// import App from "./ContCardSelf";
// import App from "./ContCardT";
import App from "./App4Router";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
