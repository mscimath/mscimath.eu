import { useState, useEffect } from "react";
import './UnitConverter.css';

const unitData = {
    Length: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
    Mass: { kilograms: 1, grams: 1000, pounds: 2.20462, ounces: 35.274 },
    Time: { seconds: 1, minutes: 1/60, hours: 1/3600, days: 1/86400 },
    Speed: {"m/s": 1, "km/h": 3.6, "mph": 2.23694, "ft/s": 3.28084 },
};

export default function UnitConverter() {
    const [category, setCategory] = useState("Length");
    const [fromUnit, setFromUnit] = useState("meters");
    const [toUnit, setToUnit] = useState("kilometers");
    const [value, setValue] = useState(1);
    const [converted, setConverted] = useState(0);

    useEffect(() => {
        convertUnits(value);
    }, [category, fromUnit, toUnit, value]);

    function convertUnits(input) {
        const numValue = parseFloat(input);
        if (isNaN(numValue)) {
            setConverted(0);
            return;
        }
        const baseValue = numValue / unitData[category][fromUnit];
        setConverted(baseValue * unitData[category][toUnit]);
    }

    return (
        <div className="unit-converter">
            <h3 className="unit-converter-title">Unit Converter</h3>
            <label>
                Category: &nbsp;
                <select className="unit-converter-select" 
                value={category} onChange={(e) => { 
                    setCategory(e.target.value);
                    setFromUnit(Object.keys(unitData[e.target.value])[0]);
                    setToUnit(Object.keys(unitData[e.target.value])[1]);
                }}>
                    {Object.keys(unitData).map((cat) => (
                        <option className="unit-converter-option" key={cat} value ={cat}>{cat}</option>
                    ))}
                </select>
            </label>

            <label>
                Value: &nbsp;
                <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
            </label>

            <label>
                From: &nbsp;
                <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                    {Object.keys(unitData[category]).map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </label>

            <label>
                To: &nbsp;
                <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                    {Object.keys(unitData[category]).map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </label>

            <p className="converter-converted-value">Converted Value:&nbsp;{converted} {toUnit}</p>
        </div>
    )
}