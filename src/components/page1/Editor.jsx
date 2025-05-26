import React from "react";
import "./Editor.css";
export default function Editor() {
    return (
        <div className="editor">
            <div className="image-section">
                <div className="editor-images">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="line1"></div>
                <h1 className="image-section-heading">Latest Editions</h1>
            </div>
            <div className="editor-section">
                <div className="editor-page-heading">
                    <h1>Founder's Note</h1>
                    <h2>Kanishka Cholak</h2>
                </div>
                <div className="line2"></div>
                <div className="editor-content">
                    <p>
                        Sangam began with a simple idea — that students need a space beyond academics to express, reflect, and create. We wanted a platform where thoughts, emotions, opinions, and imagination could come together — a true confluence of voices from across our campus. Over time, Sangam has grown from a quiet vision into a vibrant publication board, capturing the essence of IIT Jammu through stories, poems, articles, and art. Every edition reflects the spirit of our student community — honest, diverse, and ever-evolving. So, to every reader who has found their way here: Thank you for joining us.  We invite you to explore, to engage, and, if you feel inspired — to contribute. Because here at Sangam, your voice matters. Let your thoughts flow. Let them meet. Let them Sangam.
                    </p>
                </div>
            </div>
        </div>
    );
}
