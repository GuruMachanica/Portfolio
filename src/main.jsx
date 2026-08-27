import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Global font preload
const preloadFont = (href) => {
  if (typeof document === "undefined") return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "font";
  link.type = "font/otf";
  link.href = href;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
};

try {
  preloadFont(new URL("./fonts/mova.otf", import.meta.url).href);
} catch (e) {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
