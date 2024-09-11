import React, {useEffect, useRef} from 'react';
import '../Canvas.css';

const CombinatoricsCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const drawNodes = () => {
            // Drawing operations 
            // Top Node
            const r = 4;
            context.strokeStyle = 'black';
            context.beginPath();
            context.arc(canvas.width/2, 25, r, 0, 2*Math.PI); 
            context.moveTo(canvas.width/2, 25);
            context.lineTo(canvas.width/2, 45);  
            context.stroke();
            context.closePath();  
            // Second from Top Node
            context.beginPath();
            context.arc(canvas.width/2, 45, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2, 45);
            context.lineTo(canvas.width/2 - 30, 65);
            context.moveTo(canvas.width/2, 45);
            context.lineTo(canvas.width/2 + 30, 65);
            context.stroke();
            //Third from top left node
            context.beginPath();
            context.arc(canvas.width/2 - 30, 65, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 - 30, 65);    
            context.lineTo(canvas.width/2 - 50, 85);
            context.moveTo(canvas.width/2 - 30, 65);
            context.lineTo(canvas.width/2 -10, 85);
            context.stroke();
            context.closePath();
            //Third from top right node
            context.beginPath();
            context.arc(canvas.width/2 + 30, 65, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 + 30, 65, r, 0, 2*Math.PI);
            context.lineTo(canvas.width/2 + 50, 85);
            context.moveTo(canvas.width/2 + 30, 65, r, 0, 2*Math.PI);
            context.lineTo(canvas.width/2 + 10, 85);
            context.stroke();
            context.closePath();
            //Fourth row, first column
            context.beginPath();
            context.arc(canvas.width/2 - 50, 85, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 - 50, 85);
            context.lineTo(canvas.width/2 - 90, 105);
            context.moveTo(canvas.width/2 - 50, 85);
            context.lineTo(canvas.width/2 - 45, 105);
            context.stroke();
            context.closePath();
            //Fourth row, second column
            context.beginPath();
            context.arc(canvas.width/2 -10, 85, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 - 10, 85);
            context.lineTo(canvas.width/2 - 6, 105); 
            context.moveTo(canvas.width/2 -10, 85);
            context.lineTo(canvas.width/2 -25, 105);
            context.stroke();
            context.closePath();
            //Fourth row, third column
            context.beginPath();
            context.arc(canvas.width/2 + 10, 85, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 + 10, 85);
            context.lineTo(canvas.width/2 + 6, 105); 
            context.moveTo(canvas.width/2 + 10, 85);
            context.lineTo(canvas.width/2 + 25, 105);
            context.stroke();
            context.closePath();
            //Fourth row, fourth column
            context.beginPath();
            context.arc(canvas.width/2 + 50, 85, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 + 50, 85);
            context.lineTo(canvas.width/2 + 90, 105);
            context.moveTo(canvas.width/2 + 50, 85);
            context.lineTo(canvas.width/2 + 45, 105);
            context.stroke();
            context.closePath();
            //Fifth row, first column
            context.beginPath();
            context.arc(canvas.width/2 - 90, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 - 90, 105);
            context.lineTo(canvas.width/2 - 125, 125);
            context.moveTo(canvas.width/2 - 90, 105);
            context.lineTo(canvas.width/2 - 100, 125);
            context.stroke();
            context.closePath();
            //Fifth row, second column
            context.beginPath();
            context.arc(canvas.width/2 - 45, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 - 45, 105);
            context.lineTo(canvas.width/2 - 80, 125);
            context.moveTo(canvas.width/2 - 45, 105);
            context.lineTo(canvas.width/2 - 65, 125);
            context.stroke();
            context.closePath();
            //Fifth row, third column
            context.beginPath();
            context.arc(canvas.width/2 - 25, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 - 25, 105);
            context.lineTo(canvas.width/2 - 35, 125);
            context.moveTo(canvas.width/2 - 25, 105);
            context.lineTo(canvas.width/2 - 50, 125);
            context.stroke();
            context.closePath();
            //Fifth row, fourth column
            context.beginPath();
            context.arc(canvas.width/2 - 6, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 - 6, 105);
            context.lineTo(canvas.width/2 - 4, 125);
            context.moveTo(canvas.width/2 - 6, 105);
            context.lineTo(canvas.width/2 - 20, 125);
            context.stroke();
            context.closePath();
            //Fifth row, fifth column
            context.beginPath();
            context.arc(canvas.width/2 + 6, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 + 6, 105);
            context.lineTo(canvas.width/2 + 4, 125);
            context.moveTo(canvas.width/2 + 6, 105);
            context.lineTo(canvas.width/2 + 20, 125);
            context.stroke();
            context.closePath();
            //Fifth row, sixth column
            context.beginPath();
            context.arc(canvas.width/2 + 25, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 + 25, 105);
            context.lineTo(canvas.width/2 + 35, 125);
            context.moveTo(canvas.width/2 + 25, 105);
            context.lineTo(canvas.width/2 + 50, 125);
            context.stroke();
            context.closePath();
            //Fifth row, seventh column
            context.beginPath();
            context.arc(canvas.width/2 + 45, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 + 45, 105);
            context.lineTo(canvas.width/2 + 80, 125);
            context.moveTo(canvas.width/2 + 45, 105);
            context.lineTo(canvas.width/2 + 65, 125);
            context.stroke();
            context.closePath();
            //Fifth row, eighth column
            context.beginPath();
            context.arc(canvas.width/2 + 90, 105, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2 + 90, 105);
            context.lineTo(canvas.width/2 + 125, 125);
            context.moveTo(canvas.width/2 + 90, 105);
            context.lineTo(canvas.width/2 + 100, 125);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 - 125, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, second
            context.beginPath();
            context.arc(canvas.width/2 - 100, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, third
            context.beginPath();
            context.arc(canvas.width/2 - 80, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, fourth
            context.beginPath();
            context.arc(canvas.width/2 - 65, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, fifth
            context.beginPath();
            context.arc(canvas.width/2 - 50, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, sixth
            context.beginPath();
            context.arc(canvas.width/2 - 35, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, seventh
            context.beginPath();
            context.arc(canvas.width/2 - 20, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 - 4, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 4, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 20, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 35, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 50, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 65, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 80, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 100, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            //Sixth row, first
            context.beginPath();
            context.arc(canvas.width/2 + 125, 125, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
            
          };

        drawNodes(); //Call the drawNodes function when the component mounts

        //Additional cleanup if needed
        {/*
        return () => {
            //Cleanup code here, if necessary
        };  
        */}
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
