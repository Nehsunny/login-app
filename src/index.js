import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";   // 🔥 THIS LINE FIXES WHITE BORDER
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
