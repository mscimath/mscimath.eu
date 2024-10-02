import React from "react";
import './Tile.css';

export default function Tile({ title, description, pdfUrl }) {
    return (
        <div className="tile">
            <div className="tile-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    View PDF
                </a>
                </div>
            </div>
        </div>
    );
}