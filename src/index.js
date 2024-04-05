import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Router from "./router/Router";
import GlobalStyle from "./styles/Theme/GlobalStyle";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
