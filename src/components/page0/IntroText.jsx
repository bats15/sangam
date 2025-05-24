import React from "react";
import "./page0.css";

export default function IntroText(props) {
    return (
        <div className={props.className}>
            <h2>Welcome to Page 0</h2>
            <p>This is the introductory text for the first page.</p>
        </div>
    );
}