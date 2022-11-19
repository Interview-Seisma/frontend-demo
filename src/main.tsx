import React from "react";
import ReactDOM from "react-dom/client";
import { EmployeeQuestion } from "./components/EmployeeQuestion";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EmployeeQuestion />
  </React.StrictMode>
);
