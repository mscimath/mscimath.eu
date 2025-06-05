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

          drawNodes(); //Call the drawNodes function when the component mounts

        }

        const drawNodes = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          // Constants 
          const circleRadius = 4;

          /* Draw a circle
          function drawCircle(x, y) {
            context.beginPath();
            context.arc(x, y, circleRadius, 0, 2 * Math.PI);
            context.stroke();
          }*/
          // Recursive function to draw the tree
          
          const r = 4; // radius of circles

            
            function makeNode(move, shift) {
              context.moveTo(canvas.width/2 - shift*20, canvas.height/2);
              context.lineTo(canvas.width/2 - move*20, canvas.height/2);
              context.moveTo(canvas.width/2 + shift*20, canvas.height/2);
              context.lineTo(canvas.width/2 + move*20, canvas.height/2);
            }

            context.strokeStyle = 'black';
            context.beginPath();
            context.arc(canvas.width/2, canvas.height/2, r, 0, 2*Math.PI);
            context.moveTo(canvas.width/2, canvas.height/2);
            context.lineTo(canvas.width/2, canvas.height/2 + 20);
            context.arc(canvas.width/2, canvas.height/2 + 20, r, 0, 2*Math.PI);

            // Left Up
            context.moveTo(canvas.width/2, canvas.height/2 + 20);
            context.lineTo(canvas.width/2 - 20, canvas.height/2 +20)
            context.arc(canvas.width/2 - 20, canvas.height/2 + 20, r, 0, 2*Math.PI );

            context.moveTo(canvas.width/2 - 20, canvas.height/2 + 20);
            context.lineTo(canvas.width/2 - 20, canvas.height/2);
            context.arc(canvas.width/2 - 20, canvas.height/2, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 20, canvas.height/2);
            context.lineTo(canvas.width/2 - 20, canvas.height/2 - 20);
            context.arc(canvas.width/2 - 20, canvas.height/2 - 20, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 20, canvas.height/2 - 20);
            context.lineTo(canvas.width/2 - 6, canvas.height/2 - 34);
            context.arc(canvas.width/2 - 6, canvas.height/2 - 34, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 6, canvas.height/2 - 34);
            context.lineTo(canvas.width/2 - 6, canvas.height/2 - 54);
            context.arc(canvas.width/2 - 6, canvas.height/2 - 54, r, 0, 2*Math.PI);

            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(canvas.width/2 - 6, canvas.height/2 - 34);
            context.lineTo(canvas.width/2 - 21, canvas.height/2 - 47);
            context.arc(canvas.width/2 - 21, canvas.height/2 - 47, r, 0, 2*Math.PI);

           // 400 -225 = a^2
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(canvas.width/2 - 20, canvas.height/2 - 20);
            context.lineTo(canvas.width/2 - 35, canvas.height/2 -35);
            context.arc(canvas.width/2 - 35, canvas.height/2 - 35, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 35, canvas.height/2 -35);
            context.lineTo(canvas.width/2 - 35, canvas.height/2 -55);
            context.arc(canvas.width/2 - 35, canvas.height/2 - 55, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 35, canvas.height/2 -35);
            context.lineTo(canvas.width/2 - 55, canvas.height/2 -35);
            context.arc(canvas.width/2 - 55, canvas.height/2 - 35, r, 0, 2*Math.PI);

            
            context.stroke();
            context.closePath();

            //Left Up Left
            context.beginPath();

            context.moveTo(canvas.width/2 - 20, canvas.height/2);
            context.lineTo(canvas.width/2 - 40, canvas.height/2);
            context.arc(canvas.width/2 - 40, canvas.height/2, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 40, canvas.height/2);
            context.lineTo(canvas.width/2 - 54, canvas.height/2 - 14);
            context.arc(canvas.width/2 - 54, canvas.height/2 - 14, r, 0, 2*Math.PI);

            context.stroke();
            context.closePath();

            // Left Up Left Lower-Left
            context.beginPath()

            context.moveTo(canvas.width/2 - 40, canvas.height/2);
            context.lineTo(canvas.width/2 - 54, (canvas.height/2) + 14);
            context.arc(canvas.width/2 - 54, canvas.height/2 + 14, r, 0, 2*Math.PI);


            context.moveTo(canvas.width/2 - 54, canvas.height/2 +14);
            context.lineTo(canvas.width/2 - 69, canvas.height/2 + 2);
            context.arc(canvas.width/2 - 69, canvas.height/2 + 2, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 54, canvas.height/2 + 14);
            context.lineTo(canvas.width/2 - 69, canvas.height/2 + 26);
            context.arc(canvas.width/2 - 69, canvas.height/2 + 26, r, 0, 2*Math.PI);

            context.stroke();
            context.closePath();

            //Left Down

            // Down to the second node
            context.moveTo(canvas.width/2 - 20, canvas.height/2 + 20);
            context.lineTo(canvas.width/2 - 20, canvas.height/2 + 40);
            context.arc(canvas.width/2 - 20, canvas.height/2 +40, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 20, canvas.height/2 + 40);
            context.lineTo(canvas.width/2 - 20, canvas.height/2 + 60);
            context.arc(canvas.width/2 - 20, canvas.height/2 + 60, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 20, canvas.height/2 + 60);
            context.lineTo(canvas.width/2 - 6, canvas.height/2 + 74);
            context.arc(canvas.width/2 - 6, canvas.height/2 + 74, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 6, canvas.height/2 + 74);
            context.lineTo(canvas.width/2 - 6, canvas.height/2 + 94);
            context.arc(canvas.width/2 - 6, canvas.height/2 + 94, r, 0, 2*Math.PI);

            context.stroke(); 
            context.closePath();

            // Lower-left curve
            context.beginPath();
            context.moveTo(canvas.width/2 - 6, canvas.height/2 + 74);
            context.lineTo(canvas.width/2 - 21, canvas.height/2 + 87); // Mirror lower
            context.arc(canvas.width/2 - 21, canvas.height/2 + 87, r, 0, 2*Math.PI);

            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(canvas.width/2 - 20, canvas.height/2 + 60); // Lower-left connection
            context.lineTo(canvas.width/2 - 35, canvas.height/2 + 75);
            context.arc(canvas.width/2 - 35, canvas.height/2 + 75, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 35, canvas.height/2 + 75);
            context.lineTo(canvas.width/2 - 35, canvas.height/2 + 95); // Continue downward
            context.arc(canvas.width/2 - 35, canvas.height/2 + 95, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 - 35, canvas.height/2 + 75);
            context.lineTo(canvas.width/2 - 55, canvas.height/2 + 75); // Leftward movement
            context.arc(canvas.width/2 - 55, canvas.height/2 + 75, r, 0, 2*Math.PI);

            context.stroke();
            context.closePath();






            

            // Right
            context.beginPath();


            context.moveTo(canvas.width/2, canvas.height/2 + 20);
            context.lineTo(canvas.width/2 + 20, canvas.height/2 +20)
            context.arc(canvas.width/2 + 20, canvas.height/2 + 20, r, 0, 2*Math.PI );

            context.moveTo(canvas.width/2 + 20, canvas.height/2 + 20);
            context.lineTo(canvas.width/2 + 20, canvas.height/2);
            context.arc(canvas.width/2 + 20, canvas.height/2, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 + 20, canvas.height/2);
            context.lineTo(canvas.width/2 + 20, canvas.height/2 - 20);
            context.arc(canvas.width/2 + 20, canvas.height/2 - 20, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 + 20, canvas.height/2 - 20);
            context.lineTo(canvas.width/2 + 6, canvas.height/2 - 34);
            context.arc(canvas.width/2 + 6, canvas.height/2 - 34, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 + 6, canvas.height/2 - 34);
            context.lineTo(canvas.width/2 + 6, canvas.height/2 - 54);
            context.arc(canvas.width/2 + 6, canvas.height/2 - 54, r, 0, 2*Math.PI);

            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(canvas.width/2 + 6, canvas.height/2 - 34);
            context.lineTo(canvas.width/2 + 21, canvas.height/2 - 47);
            context.arc(canvas.width/2 + 21, canvas.height/2 - 47, r, 0, 2*Math.PI);

           // 400 -225 = a^2
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(canvas.width/2 + 20, canvas.height/2 - 20);
            context.lineTo(canvas.width/2 + 35, canvas.height/2 -35);
            context.arc(canvas.width/2 + 35, canvas.height/2 - 35, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 + 35, canvas.height/2 -35);
            context.lineTo(canvas.width/2 + 35, canvas.height/2 -55);
            context.arc(canvas.width/2 + 35, canvas.height/2 - 55, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 + 35, canvas.height/2 -35);
            context.lineTo(canvas.width/2 + 55, canvas.height/2 -35);
            context.arc(canvas.width/2 + 55, canvas.height/2 - 35, r, 0, 2*Math.PI);

            
            context.stroke();
            context.closePath();

             //Right Up Right
             context.beginPath();

             context.moveTo(canvas.width/2 + 20, canvas.height/2);
             context.lineTo(canvas.width/2 + 40, canvas.height/2);
             context.arc(canvas.width/2 + 40, canvas.height/2, r, 0, 2*Math.PI);
 
             context.moveTo(canvas.width/2 + 40, canvas.height/2);
             context.lineTo(canvas.width/2 + 54, canvas.height/2 - 14);
             context.arc(canvas.width/2 + 54, canvas.height/2 - 14, r, 0, 2*Math.PI);
 
             context.stroke();
             context.closePath();
 
             // Right Up Right Lower-Right
             context.beginPath()
 
             context.moveTo(canvas.width/2 + 40, canvas.height/2);
             context.lineTo(canvas.width/2 + 54, (canvas.height/2) + 14);
             context.arc(canvas.width/2 + 54, canvas.height/2 + 14, r, 0, 2*Math.PI);
 
 
             context.moveTo(canvas.width/2 + 54, canvas.height/2 +14);
             context.lineTo(canvas.width/2 + 69, canvas.height/2 + 2);
             context.arc(canvas.width/2 + 69, canvas.height/2 + 2, r, 0, 2*Math.PI);
 
             context.moveTo(canvas.width/2 + 54, canvas.height/2 + 14);
             context.lineTo(canvas.width/2 + 69, canvas.height/2 + 26);
             context.arc(canvas.width/2 + 69, canvas.height/2 + 26, r, 0, 2*Math.PI);
 
             context.stroke();
             context.closePath();
          //   context.moveTo(canvas.width/2 - 6, canvas.height/2 - 34);

            // Right Down
            
            context.beginPath();
            context.moveTo(canvas.width/2 + 20, canvas.height/2 + 20);
            context.lineTo(canvas.width/2 + 20, canvas.height/2 + 40);
            context.arc(canvas.width/2 + 20, canvas.height/2 + 40, r, 0, 2*Math.PI);

            context.moveTo(canvas.width/2 + 20, canvas.height/2 + 40);
    context.lineTo(canvas.width/2 + 35, canvas.height/2 + 55);
    context.arc(canvas.width/2 + 35, canvas.height/2 + 55, r, 0, 2*Math.PI);

    context.moveTo(canvas.width/2 + 20, canvas.height/2 + 40);
    context.lineTo(canvas.width/2 + 5, canvas.height/2 + 55);
    context.arc(canvas.width/2 + 5, canvas.height/2 + 55, r, 0, 2*Math.PI);
            context.stroke();
            context.closePath();
           //Right Down close
          


            

           


            //context.beginPath();

            //for (let i; i<6; i++){
              
            //} 

         
          };


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
