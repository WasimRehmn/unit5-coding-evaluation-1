import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WishList from "./Components/Wishlist";

ReactDOM.render(
    <React.StrictMode>
        <WishList />

        <br />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
