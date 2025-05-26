import React, { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        setClicked(prev => {
            const newState = !prev;
            if (newState) hovered();
            else unhovered();
            return newState;
        });
    };

    const hovered = () => {
        document.querySelector(".navbar")?.classList.add("show");
    };

    const unhovered = () => {
        document.querySelector(".navbar")?.classList.remove("show");
    };

    return (
        <div
            className="nav-container"
            onMouseOver={!isMobile ? hovered : undefined}
            onMouseOut={!isMobile ? unhovered : undefined}
        >
            <div className="navbar">
                <div className="navbar__links">
                    <div className="logo-nav">SANGAM LOGO</div>
                    <a href="#page1">Founder's Note</a>
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
                <img src="../../public/assets/menu.png" onClick={isMobile ? handleClick : undefined} alt="menu" />
            </div>
        </div>
    );
}
