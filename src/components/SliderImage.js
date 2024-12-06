import React, { useState } from "react";
import './SliderImage.css';

export default function RectangleImageHomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/img/gluon.png",
        "/img/ppcollision.png",
        "/img/photoncollision.png",
        "/img/electroncollision.png",
        "/img/pacollision.png",
    ];

    // Navigation Handlers
    const handleClickLeftArrow = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleClickRightArrow = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % images.length
        );
    };

    return (
        <div 
            style={{
                height: "100vh",
                width: "100vw",
                position: "relative",
                overflow: "hidden",
                border: "2px solid blue",
            }}
        >
            {/* Arrows */}
            <button
                className="left-arrow"
                onClick={handleClickLeftArrow}
                style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }}
            >
                {"<"}
            </button>
            <button
                className="right-arrow"
                onClick={handleClickRightArrow}
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }}
            >
                {">"}
            </button>

            {/* Slider */}
            <div
                style={{
                    display: "flex", // Align images horizontally
                    transition: "transform 0.5s ease-in-out", // Smooth transition
                    transform: `translateX(-${currentIndex * 100}vw)`, // Shift by index
                    width: `${images.length * 100}vw`, // Total width of all images
                }}
            >
                {images.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt={`Slide ${index}`}
                        style={{
                            width: "100vw", // Full viewport width for each image
                            height: "100vh", // Full viewport height
                            objectFit: "cover", // Maintain aspect ratio, fill space
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
