import React from "react";
import { render } from "react-dom";
import axios from "axios";
import "./css/style.css";
import "./css/menu.css";
import "./css/game.css";
import "./css/card.css";
import "./css/hud.css";
import "./config/firebase-config";
import App from "./components/pages/App";

axios.interceptors.request.use(
    req => {
        const token = localStorage.getItem("bfgToken");
        if (token && req.headers) {
            req.headers.Authorization = token;
            return req;
        } else {
            return req;
        };
    },
);

render(<App />, document.querySelector("#main"));
