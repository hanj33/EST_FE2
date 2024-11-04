import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App2";
import App from "./App3Cart";
// import App from "./App4";
// import App from "./App5flow";
// import App from "./App6EffectDiff";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
