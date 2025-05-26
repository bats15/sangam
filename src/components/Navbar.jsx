import React from "react";
import "./navbar.css";

export default function Navbar() {
    function hovered() {
        const q = document.querySelector(".navbar");
        q.classList.add("show");
    }

    function unhovered() {
        const q = document.querySelector(".navbar");
        q.classList.remove("show");
    }

    return (
        <div className="nav-container" onMouseOver={hovered} onMouseOut={unhovered}>

            <div className="navbar">
                <div className="navbar__links">
                    <div className="logo-nav">SANGAM LOGO</div>
                    <a href="#page1">Editor's Note</a>
                    <a href="#page2">Photographs</a>
                    <a href="#page3">Latest Edition</a>
                    <a href="#page4">Contact</a>
                    <a href="#Achievement">Achievement</a>
                    <a href="#Team">Team</a>
                    <a href="#editor-stories">editor's stories</a>
                    <a href="#best-picks">best picks</a>
                </div>
            </div>
            <div className="indicator">
            </div>
        </div>
    );
}
