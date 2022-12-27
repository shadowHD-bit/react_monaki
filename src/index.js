import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./route/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <AppRouter />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
