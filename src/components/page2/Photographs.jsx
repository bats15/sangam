import React from "react";
import "./photographs.css";

const images = [
  "/assets/photographs/photo1.jpg",
  "/assets/photographs/photo2.jpg",
  "/assets/photographs/photo3.jpg",
  "/assets/photographs/photo4.jpg",
  "/assets/photographs/photo5.jpg",
  "/assets/photographs/photo6.jpg",
  "/assets/photographs/photo7.jpg",
  "/assets/photographs/photo8.jpg",
  "/assets/photographs/photo9.jpg",
  "/assets/photographs/photo10.jpg",
  "/assets/photographs/photo11.jpg",
];

export default function Photographs() {
  return (
    <div className="collage-container">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Photo ${i + 1}`}
          className={`collage-img img${i}`}
        />
      ))}
    </div>
  );
}
