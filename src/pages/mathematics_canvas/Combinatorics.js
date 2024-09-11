import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import CombinatoricsCanvas from './CombinatoricsCanvas';
import CombinatoricsSubjectList from './CombinatoricsSubjectList';

const Combinatorics = ({ navigate }) => {
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="subject-intro-container">
      <div className="background-canvas" style={{ width: canvasWidth }}>
        {/* Background Canvas */}
      </div>
      <div className="content">
        <CombinatoricsCanvas />
        <CombinatoricsSubjectList/>
      </div>
    </div>
  );
};

export default Combinatorics;
