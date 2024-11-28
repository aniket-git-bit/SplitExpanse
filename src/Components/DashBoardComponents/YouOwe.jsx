import React from 'react';

const YouOwe = ({ totalOwe, details }) => {
  return (
    <div className="owe-details">
      <h2>You Owe</h2>
      <p>${totalOwe}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            {detail.person}: ${detail.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouOwe;
