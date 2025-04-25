import { createRoot } from "react-dom/client";
import * as React from "react";
import { App } from "./App";
import "../css/main.css";
import "../css/tailwind.css";
import { PostProvider } from "./contexts/PostContext";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
