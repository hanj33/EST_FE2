import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App2timerSelf";
// import App from "./StopWatch2";
// import App from "./App3useMemo";
import App from "./App3useMemoPRAC";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);