import React, { useState } from 'react';
import './Trigonometry.css'

const TrigonometryCircle = () => {
    const [angle, setAngle] = useState(0);
    const radius = 100;
    const centerX = 150;
    const centerY = 150;

    // Calculate point on circle
    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY - radius * Math.sin((angle * Math.PI) / 180);

    // Calculate sin, cos, tan values
    const sin = Math.sin((angle * Math.PI) / 180).toFixed(3);
    const cos = Math.cos((angle * Math.PI) / 180).toFixed(3);
    const tan = Math.tan((angle * Math.PI) / 180).toFixed(3);
    const ctg = (Math.cos((angle * Math.PI) / 180) / Math.sin((angle * Math.PI) / 180)).toFixed(3);

    return  (
        <div className='trig-circle-container'>
            
            <svg width="300" height="300" className='trig-circle'>
                {/* Coordinate axes */}
                <line x1 = "0" y1="150" x2="300" y2="150" stroke="rgb(20, 20, 20)" strokeWidth="1" />
                <line x1="150" y1="0" x2="150" y2="300" stroke='rgb(20, 20, 20, 20)' strokeWidth="1" />

                {/* Unit circle */}
                <circle
                    cx = {centerX}
                    cy = {centerY}
                    r = {radius}
                    fill = "none"
                    stroke = "rgb(40, 40, 40)"
                    strokeWidth="1.5"
                />

                {/* Angle arc */}
                <path
                    d={`M ${centerX} ${centerY}
                        L ${centerX + 30} ${centerY}
                        A 30 30 0 ${angle > 180 ? 1 : 0} 1
                        ${centerX + 30 * Math.cos((angle * Math.PI) / 180)}
                        ${centerY - 30 * Math.sin((angle * Math.PI) / 180)}`}
                    fill="none"
                    stroke="rgb(85, 72, 51)"
                    strokeWidth="2"
                />

                {/* Point on circle */}
                <circle cx={x} cy={y} r="4" fill="rgb(85, 72, 51)" />

                {/* Lines showing sin, cos, tan, ctg */}
                <line 
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="rgb(85, 72, 51)"
                    strokeWidth="1"
                />
                <line 
                    x1={x} 
                    y1={centerY} 
                    x2={x} 
                    y2={y} 
                    stroke="rgb(110, 90, 95)" 
                    strokeWidth="2" 
                    strokeDasharray="4"
                />
                <line
                    x1={centerX} 
                    y1={centerY} 
                    x2={x} 
                    y2={centerY} 
                    stroke="rgb(90, 120, 90)" 
                    strokeWidth="2" 
                    strokeDasharray="4"
                />
            </svg>
            <div className='circle-cont-right'>
                <div className='section-description'>
                    <h3>Interactive Unit Circle</h3>
                    <p>
                        Drag the angle slider to see how sine, cosine, and tangent values change as a point moves around the unit circle.
                    </p>
                </div>
            <div className='trig-controls'>
                <label className='angle-label'>
                    Angle: {angle}°
                    <input
                        type='range'
                        min="0"
                        max="360"
                        value={angle}
                        onChange={(e) => setAngle(Number(e.target.value))}
                        className='angle-slider'
                    />
                </label>
                <div className='trig-values'>
                <p className='value-cos'>cos(θ) = {cos}</p>
                <p className='value-sin'>sin(θ) = {sin}</p>
                <p className='value-tan'>tan(θ) = {tan}</p>
                <p className='value-ctg'>ctg(θ) = {ctg}</p>
            </div></div>

            </div>

            
        </div>
    );
};

const TrigonometryFormulas = () => (
    <div className='trig-formulas'>
        <h4 className='formula-title'>Common Formulas</h4>
        <div className='formula-grid'>
            <div className='formula-item'>
                <h5 className='formula-subtitle'>Pythogorean Identity</h5>
                <p>sin²(θ) + cos²(θ) = 1</p>
            </div>
            <div className='formula-item'>
                <h5 className='formula-subtitle'>Tangent</h5>
                <p>tan(θ) = sin(θ) / cos(θ)</p>
            </div>
            <div className='formula-item'>
                <h5 className="formula-subtitle">Double Angle - Sin</h5>
                <p>sin(2θ) = 2sin(θ)cos(θ)</p>
            </div>
            <div className='formula-item'>
                <h5 className="formula-subtitle">Double Angle - Cos</h5>
                <p>cos(2θ) = cos²(θ) - sin²(θ)</p>
            </div>
        </div>
    </div>
);

const Trigonometry = ({ navigate }) => {

    return (
        <div className='trigonometry-container subject-intro-container'>
            <div className='unit-circle-section'>
                
                <TrigonometryCircle />
            </div>
            <div className='trig-maths-container'>
                <TrigonometryFormulas />
                <div className='practice-problems'>
                    <h3 >Practice Problems</h3>
                    <div className='problems-container'>
                        <div className='problem'>
                            <p>Find the missing side length:</p>
                            <p className='problem-text'>
                                In a right triangle with hypotenuse 10 and angle θ = 30°, find the length of the opposite side.
                            </p>
                            <button className='solution-button'
                            onClick={() => alert("Solution: opposite = 10 * sing(30°) = 5")}
                            >
                                Show Solution
                            </button>
                        </div>
                        <div className='problem'>
                            <p>Verify the identity:</p>
                            <p className='problem-text'>
                            tan²(θ) + 1 = sec²(θ)
                            </p>
                            <button
                                className='solution-button'
                                onClick={() => alert("Solution: Start with tan²(θ) = sin²(θ)/cos²(θ), then...")}
                            >
                                Show Solution
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Trigonometry;