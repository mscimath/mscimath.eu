import {useEffect, useRef} from "react";

export default function WaveAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        canvas.width = window.innerWidth;
        canvas.height = 200;

        let time = 0;

        function drawWave() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            for (let x = 0; x < canvas.width; x++) {
                const y = 
                    Math.sin((x + time) * 0.02) * 40 + 
                    Math.sin((x + time) * 0.04) * 20 +
                    canvas.height / 2;
                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = "#00ffff";
            ctx.lineWidth = 3;
            ctx.stroke();

            time += 0.07;
            animationFrameId = requestAnimationFrame(drawWave);
        }

        drawWave();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return <canvas
        ref={canvasRef} 
        className="wave-canvas"
        style={{ width: "100%", height: "200px", display: "block" }}
    />
}