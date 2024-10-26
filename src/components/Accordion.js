import React, {useState} from "react";
import './Accordion.css';

export default function Accordion({ title, content, className='', defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen); // Initialise based on defaultOpen

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item ${isOpen ? 'open': ''} ${className}`}>
            <div className="accordion-title" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
}