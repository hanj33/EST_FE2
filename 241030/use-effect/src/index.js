import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App2Time";
import App from "./App3Array";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
