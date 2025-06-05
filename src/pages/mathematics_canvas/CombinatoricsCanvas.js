import React, {useEffect, useRef} from 'react';
import '../Canvas.css';

const CombinatoricsCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const resizeCanvas = () => {
          const parent = canvas.parentElement;
          const rect = parent.getBoundingClientRect();

          // Optional: support retina displays
          const dpr = window.devicePixelRatio || 1;

          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;

          canvas.style.width = `${rect.width}px`;
          canvas.style.height =  `${rect.height}px`;

          context.setTransform(dpr, 0, 0, dpr, 0, 0);

          const x = (canvas.width - 150) / 4
          const y = (canvas.height - 150) / 4

          drawDie(context, x, y, 150, 6); // drawDie(context, x, y, size, value)

        }

        function drawDie(context, x, y, size, value) {
          const pipRadius = size * 0.08;
          const offset = size * 0.25;
        
          context.fillStyle = '#fff';
          context.strokeStyle = '#000';
          context.lineWidth = 2;
        
          // Draw square
          context.beginPath();
          context.rect(x, y, size, size);
          context.fill();
          context.stroke();
        
          // Draw pips
          const centerX = x + size / 2;
          const centerY = y + size / 2;
        
          const pipPositions = {
            1: [[0, 0]],
            2: [[-1, -1], [1, 1]],
            3: [[-1, -1], [0, 0], [1, 1]],
            4: [[-1, -1], [-1, 1], [1, -1], [1, 1]],
            5: [[-1, -1], [-1, 1], [1, -1], [1, 1], [0, 0]],
            6: [[-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]]
          };
        
          context.fillStyle = '#000';
          pipPositions[value].forEach(([dx, dy]) => {
            context.beginPath();
            context.arc(centerX + dx * offset, centerY + dy * offset, pipRadius, 0, 2 * Math.PI);
            context.fill();
          });
        }
        


        //Additional cleanup if needed
        {/*
        return () => {
            //Cleanup code here, if necessary
        };  
        */}

        window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    }
    }, []);

    return (
      <div id="combinatorics-canvas">
          <canvas ref={canvasRef}>
            Your browser does not support the canvas element.
          </canvas>
      </div>
    );
};

export default CombinatoricsCanvas;
