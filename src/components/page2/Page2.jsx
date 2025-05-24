import React from "react";
import "./page2.css";
import Photographs from "./Photographs";
export default function Page2() {
    return (
        <div className="page2">
            <h1 className="page2-title">Photographs</h1>
            <div className="page2-content">
            <Photographs />
            </div>
        </div>
    );
}