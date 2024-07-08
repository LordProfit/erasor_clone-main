import React, { useState, useCallback } from 'react';
import { Separator } from '@radix-ui/react-separator';

interface SplitterProps {
  children: React.ReactNode;
}

const Splitter: React.FC<SplitterProps> = ({ children }) => {
  const [leftWidth, setLeftWidth] = useState<number>(50); // initial width percentage of the left panel

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newWidth = (e.clientX / window.innerWidth) * 100;
    setLeftWidth(newWidth);
  }, []);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="splitter-container">
      <div className="panel left" style={{ width: `${leftWidth}%` }}>
        {children && React.Children.toArray(children)[0]}
      </div>
      <Separator
        orientation="vertical"
        className="separator"
        onMouseDown={handleMouseDown}
      />
      <div className="panel right" style={{ width: `${100 - leftWidth}%` }}>
        {children && React.Children.toArray(children)[1]}
      </div>
    </div>
  );
};

export default Splitter;
