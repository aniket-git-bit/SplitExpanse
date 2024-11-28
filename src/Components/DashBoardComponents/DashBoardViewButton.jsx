import React from 'react';

const ViewButtons = ({ onViewChange }) => {
  return (
    <div className="view-buttons">
      <button onClick={() => onViewChange('list')}>View as List</button>
      <button onClick={() => onViewChange('chart')}>View Chart</button>
    </div>
  );
};

export default ViewButtons;
