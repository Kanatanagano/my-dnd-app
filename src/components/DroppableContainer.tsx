import React from 'react';

interface DroppableContainerProps {
  children: React.ReactNode;
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({ children }) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      {children}
    </div>
  );
};

export default DroppableContainer;