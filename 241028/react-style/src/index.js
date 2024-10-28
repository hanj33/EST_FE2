import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App2btn";
import App from "./App3btn";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
