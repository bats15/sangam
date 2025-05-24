import React from "react";
import "./page0.css";
import Header from "./Header";
import IntroText from "./IntroText";

export default function Page0() {
    return (
        <main className="page0">
            <Header />
            <div className="page0-circle-bg">jbjb</div>
            <h1>Page 0</h1>
            <p>This is the first page of the application.</p>
            <IntroText className="intro-text" />
        </main>
    );
}