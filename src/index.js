import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
